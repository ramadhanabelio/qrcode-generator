# QR Code Generator | Responsive Web for Generate QR Code with Flask

## Description

This is one of the projects I created to enhance my knowledge of the Python programming language. This project involves creating a responsive web application for mobile devices. The web application serves as a tool for generating QR codes automatically using Python's built-in libraries. I developed this web application using the Python programming language with the Flask framework to enable the presentation of Python projects in a web interface.

![QR Code Generator Thumbnail](static/img/Thumbnail.png)

## Features

1. Generate QR Code from the provided URL.
2. Download the generated QR Code.

## Project Resources

1. Python: The primary programming language used for developing the application.
2. Flask: A micro web framework in Python used to build the web application and handle HTTP requests.
3. qrcode: A Python library used to generate QR Codes from provided data or URLs.
4. os: This module in Python provides functions for interacting with the operating system, utilized in this application to handle file paths and directory creation for storing generated QR Codes.

## Usage

Follow these steps to run the QR Code Generator application:

### Prerequisites

Make sure you have Python installed on your system before getting started.

### Steps

**1.** Clone the project repository to your local directory:

```bash
git clone https://github.com/ramadhanabelio/qrcode-generator.git
```

**2.** Navigate to the project directory:

```bash
cd qrcode-generator
```

**3.** Install dependencies using pip:

```bash
pip install -r requirements.txt
```

**4.** Run the Flask application:

```bash
python app.py
```

After following the steps above, the application will run on your local server. You can access it via a web browser using the address provided by Flask (usually http://localhost:5000).

## How to Use

1. Open the application in a web browser using the address provided by Flask.
2. Enter the URL you want to convert into a QR Code on the home page.
3. Click the "Generate" button to create the QR Code.
4. Once the QR Code is successfully created, it will be automatically downloaded to your device.

By following the steps above, users can easily generate a QR Code from the desired URL and have it downloaded as a PNG image without the need for additional download steps.
