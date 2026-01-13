# 📨 Apache Kafka Node.js Implementation

![Kafka](https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A hands-on implementation of **Apache Kafka** using Node.js. This project demonstrates the core architectural components of event streaming: creating topics via an **Admin Client**, producing messages with a **Producer**, and processing streams with a **Consumer**.

It utilizes the `kafkajs` library to interact with a Kafka Broker.

---

## 🏗️ Architecture

The project is structured into four distinct modules, each representing a key Kafka concept:

| File | Component | Role |
| :--- | :--- | :--- |
| **`client.js`** | **Client Configuration** | Centralized configuration for connecting to the Kafka Broker (clientID, brokers). |
| **`admin.js`** | **Admin Client** | Responsible for infrastructure management, such as creating Topics and defining Partitions. |
| **`producer.js`** | **Producer** | Sends data (messages) to specific Topics. |
| **`consumer.js`** | **Consumer** | Subscribes to Topics and processes incoming data streams in real-time. |

---

## ⚙️ Prerequisites

Before running the scripts, ensure you have the following:

1.  **Node.js** (v14+) installed.
2.  **Apache Kafka Running**: You need a running Kafka Broker.
    * *Option A (Docker - Recommended):*
        ```bash
        docker run -p 9092:9092 apache/kafka:latest
        ```
    * *Option B (Local Install):* Ensure Zookeeper and Kafka Server are started.

---

## 🚀 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yash252525/Kafka.git](https://github.com/yash252525/Kafka.git)
    cd Kafka
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

---

## ⚡ How to Run

Follow this specific order to see the full event streaming lifecycle.

### Step 1: Create the Infrastructure (Admin)
First, we must create the Topic and define how many partitions it has.
```bash
node admin.js
```
> **What happens:** The script connects to the broker, creates a topic (e.g., `rider-updates`), and disconnects.

### Step 2: Start the Consumer
Open a **new terminal** window and run the consumer. It will sit and wait for messages.
```bash
node consumer.js
```
> **What happens:** The consumer joins a Consumer Group and begins listening to the topic. You will see it waiting for data.

### Step 3: Send Data (Producer)
In your **original terminal**, run the producer to send messages.
```bash
node producer.js
```
> **What happens:** The script sends messages (e.g., "Driver Location Update") to the broker.
> **Observe:** Check your **Consumer terminal**. You should see the messages appear instantly!

---

## 🧠 Key Concepts Demonstrated

### 1. Partitioning
This project allows defining the number of partitions (in `admin.js`).
* **Why it matters:** Partitions allow Kafka to scale. By splitting a topic into logs located on different servers, multiple consumers can read from the same topic simultaneously.

### 2. Consumer Groups
The `consumer.js` likely defines a `groupId`.
* **Why it matters:** If you run `node consumer.js` in *two* different terminals with the same Group ID, Kafka will automatically load-balance the messages between them. This demonstrates **Horizontal Scaling**.

### 3. Asynchronous Processing
The code uses `async/await` to handle the asynchronous nature of network requests to the Kafka Broker, ensuring non-blocking execution.

---

## 👤 Author

**Yash**
* [GitHub Profile](https://github.com/yash252525)
