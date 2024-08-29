**Project: YouTube Video Downloader**

We've developed a Python-based YouTube video downloader as my project. The idea is straightforward yet powerful—you input a YouTube URL, select where you'd like to save the video, and the program handles the rest.

To achieve this, we utilised the `pytube` module to interface with YouTube and Tkinter to create a simple graphical user interface (GUI) for file selection. The core of the program revolves around fetching the highest resolution video stream available and downloading it in MP4 format.

The process begins with the user entering a video URL and choosing a save location through a file dialogue box. The program then verifies the URL, filters the available video streams, and downloads the best quality video to the selected path. Error handling is built in to manage any issues that might arise during the download.

Additionally, we added a feature that prompts the user for input and confirms their selections, enhancing usability. The final result is a robust yet user-friendly tool that automates YouTube video downloads efficiently.
