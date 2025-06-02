# ⚡ Event-Driven Architecture in Node.js

A lightweight event-driven logging system using Node.js, built to demonstrate how events and custom emitters can be used to monitor system behavior (like free memory) and log it to a file.

---

## 📦 Overview

This project uses:

- `fs` module for file operations
- `os` module to access system memory data
- `events` module to create custom event emitters

Every 4 seconds, it logs the current free memory percentage to `log.txt` using a custom event system.

---

## 🚀 Features

- Emits custom `message` events
- Logs each event to a file with timestamp
- Monitors free system memory continuously
- Demonstrates real-world use of Node.js `EventEmitter` class

---

## 🛠️ File Structure

```
├── log.txt # Logs system memory % over time
├── logger.js # Main script (you can rename your file if needed)
└── README.md # Project documentation
```