package main

import (
	"database/sql"
	"fmt"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
	"log"
	"net/http"
)

var db *sql.DB

func init() {
	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", dbHost, dbPort, dbUser, dbPassword, dbName)
	var err error
	db, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	// Create a new Gin router
	router := gin.Default()
	// Define a simple welcome message at the root path
	router.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Welcome to the media server")
	})
	// Handle video streaming requests
	router.GET("stream/:filename", streamVideo)
	// Run the server on port 8080
	router.Run(":8080")
}
