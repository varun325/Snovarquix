package controllers

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

func StreamVideo(c *gin.Context) {
	// Extract the filename parameter from the URL
	fileName := c.Param("filename")

	// Open the video file
	file, err := os.Open("F:/English Movies/" + fileName)
	if err != nil {
		// If the file cannot be opened, respond with a "not found" message
		c.String(http.StatusNotFound, "Video not found.")
		return
	}
	defer file.Close()

	// Get information about the file, such as size
	fileInfo, err := file.Stat()
	if err != nil {
		// If an error occurs while getting file information, respond with an internal server error
		c.String(http.StatusInternalServerError, "Internal Server Error")
		return
	}

	// Check for the "Range" header in the request
	rangeHeader := c.GetHeader("Range")
	if rangeHeader == "" {
		// If the "Range" header is not present, set the headers and return
		fmt.Println("Range header wasn't found")
		c.Header("Content-Type", "video/mp4")
		c.Header("Accept-Ranges", "bytes")
		c.Header("Content-Length", strconv.FormatInt(fileInfo.Size(), 10))
		return
	}

	// If the "Range" header is present, serve the requested byte range
	ranges := strings.SplitN(rangeHeader[6:], "-", 2)
	start, err := strconv.ParseInt(ranges[0], 10, 64)
	if err != nil {
		start = 0
	}

	end, err := strconv.ParseInt(ranges[1], 10, 64)
	if err != nil || end <= 0 {
		end = fileInfo.Size() - 1
	}

	// Calculate the length of the content to be served
	length := end - start + 1

	// Respond with a partial content status and specify the content range
	c.Status(http.StatusPartialContent)
	c.Header("Content-Type", "video/mp4")
	c.Header("Content-Length", strconv.FormatInt(length, 10))
	c.Header("Content-Range", "bytes "+strconv.FormatInt(start, 10)+"-"+strconv.FormatInt(end, 10)+"/"+strconv.FormatInt(fileInfo.Size(), 10))

	// Seek to the starting position in the file
	file.Seek(start, 0)

	// Copy the specified range of content to the response writer using a buffer
	io.CopyBuffer(c.Writer, file, make([]byte, 64*1024))
}
