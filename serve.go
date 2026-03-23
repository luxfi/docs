// Static file server for Lux docs using hanzoai/static.
// Handles Next.js static export clean URLs: tries path, path.html, path/index.html, then 404.
package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"

	static "github.com/hanzoai/static"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	root := os.Getenv("ROOT")
	if root == "" {
		root = "/app"
	}

	cfg := static.CreateConfig()
	cfg.Root = root
	cfg.ErrorPage404 = "404.html"
	cfg.CacheControl = map[string]string{
		".html": "no-cache",
		".json": "no-cache",
		".js":   "public, max-age=31536000, immutable",
		".css":  "public, max-age=31536000, immutable",
		".png":  "public, max-age=86400",
		".jpg":  "public, max-age=86400",
		".svg":  "public, max-age=86400",
		".ico":  "public, max-age=86400",
		".woff": "public, max-age=31536000, immutable",
		".woff2": "public, max-age=31536000, immutable",
		"*":     "public, max-age=3600",
	}

	handler, err := static.New(context.Background(), http.NotFoundHandler(), cfg, "docs")
	if err != nil {
		log.Fatalf("failed to create static handler: %v", err)
	}

	mux := http.NewServeMux()

	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		fmt.Fprint(w, "ok")
	})

	// Wrap static handler to try .html extension for clean URLs.
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		urlPath := r.URL.Path

		// Root: serve index.html directly (avoid redirect).
		if urlPath == "/" {
			r.URL.Path = "/index.html"
			handler.ServeHTTP(w, r)
			return
		}

		// Has file extension: serve directly.
		if filepath.Ext(urlPath) != "" {
			handler.ServeHTTP(w, r)
			return
		}

		// Try path.html (Next.js static export generates these).
		htmlPath := filepath.Join(root, urlPath+".html")
		if _, err := os.Stat(htmlPath); err == nil {
			r.URL.Path = urlPath + ".html"
			handler.ServeHTTP(w, r)
			return
		}

		// Try path/index.html.
		indexPath := filepath.Join(root, urlPath, "index.html")
		if _, err := os.Stat(indexPath); err == nil {
			r.URL.Path = urlPath + "/index.html"
			handler.ServeHTTP(w, r)
			return
		}

		// Fall through to static handler (will serve 404.html).
		handler.ServeHTTP(w, r)
	})

	addr := ":" + port
	log.Printf("serving %s on %s", root, addr)
	if err := http.ListenAndServe(addr, mux); err != nil {
		log.Fatalf("server error: %v", err)
	}
}
