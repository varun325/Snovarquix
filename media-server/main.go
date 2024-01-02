package main

import (
	"github.com/gin-gonic/gin"
	"github.com/varun325/media-server/controllers"
	"github.com/varun325/media-server/database"
	"github.com/varun325/media-server/middlewares"
	"net/http"
)

func main() {
	database.Connect(connectionString)
	database.Migrate()
	// Create a new Gin router
	router := gin.Default()
	api := router.Group("/api")
	{
		api.POST("/token", controllers.GenerateToken)
		api.POST("/user/register", controllers.RegisterUser)
		secured := api.Group("/secured").Use(middlewares.Auth())
		{
			secured.GET("/ping", controllers.Ping)
			secured.GET("/stream/:filename", controllers.StreamVideo) //secured stream
		}
	}
	// Define a simple welcome message at the root path
	router.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Welcome to the media server")
	})
	// Handle video streaming requests
	router.GET("stream/:filename", controllers.StreamVideo)
	// Run the server on port 8080
	router.Run(":8080")
}
