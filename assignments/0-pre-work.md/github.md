# GitHub and Git Setup Guide for Collaboration

## Table of Contents
1. [Introduction to GitHub and its Significance](#introduction-to-github-and-its-significance)
2. [Signing Up for GitHub](#1-signing-up-for-github)
3. [Creating a Sandbox Repository](#2-creating-a-sandbox-repository)
4. [Adding Collaborators](#3-adding-collaborators)
5. [Installing Git and GitHub Desktop](#4-installing-git-and-github-desktop)
6. [Setting up GitHub with IDEs](#5-setting-up-github-with-ides)
    - 6.1 [Visual Studio](#61-visual-studio)
    - 6.2 [Visual Studio Code](#62-visual-studio-code)
    - 6.3 [IntelliJ IDEA](#63-intellij-idea)

# GitHub and Git Setup Guide for Collaboration

## 1. Introduction to GitHub and its Significance

In the world of software development, collaboration and version control are fundamental. Just as you'd write drafts for an essay and revisit previous versions or collaborate with peers on a group assignment, developers need a system to manage changes to their code, collaborate, and revert to previous states if necessary.

GitHub is one such platform that facilitates this. Think of GitHub as Google Docs for code. Multiple people can work on the same project simultaneously, and every change made is tracked and can be reverted.

In this class, and in many professional environments, we employ the concept of "as code." This principle encapsulates the idea that many things, not just software code, can be treated as if they were code. Here are some of its applications:

- **Documentation as Code**: Documentation, like the guide you're reading now, can be managed just like software code. This approach ensures that documentation remains up-to-date as changes to software are made.
  
- **Infrastructure as Code**: Rather than manually setting up servers or databases, developers write code to define and provision these resources. It's a more efficient, reproducible, and scalable approach.

- **Source Code**: This is the actual software code developers write. With GitHub, they can manage versions, collaborate, and ensure that any changes made do not break the existing system.

These concepts are vital not only for this course but for real-world applications. In industries, "as code" principles and platforms like GitHub are standard tools that facilitate efficiency, collaboration, and accuracy.

Now, let's dive into how you'll set up and use GitHub for this class. In this guide, you'll learn how to create a GitHub account, set up a sandbox repository to practice, collaborate with team members, and integrate GitHub into your chosen development environment.


## 2. Signing Up for GitHub
GitHub is a platform that hosts Git repositories and facilitates collaborative software development.

### Step 2.1: Visit GitHub's Signup Page
- Go to [GitHub's signup page](https://github.com/join).

### Step 2.2: Fill Out the Signup Form
- Enter a username, email (preferably your Rhode Island College email), and password.
- Complete the form and verify your account through the email GitHub sends you.

## 3. Creating a Sandbox Repository
A repository (or "repo") is a space where you can practice using GitHub. For this class, you'll be setting up a sandbox repository.

### Step 3.1: Create a New Repo
- After logging in to GitHub, click on the "+" icon in the top right corner and select "New repository."
- Name your repository as `csci401w-sandbox`. This naming convention will help keep things organized.
- Add a brief description, for example, "My sandbox for practicing with GitHub in CSCI 401W."
- Choose "Private" so that only you and your invited collaborators can access it.
- Initialize the repository with a README.
- Click "Create repository."

📝 **Note:** This sandbox repository is for practice and getting familiar with GitHub. Once your team is settled, a team member will create an official repository for assignment submissions. Your team will then collaborate on that single repository for all assignments.

## 4. Adding Collaborators
To allow your team members to practice with you in the sandbox repository, add them as collaborators.

### Step 4.1: Navigate to the Repository's Settings
- Go to your `csci401w-sandbox` repository.
- Click on the "Settings" tab.

### Step 4.2: Add Collaborators
- In the left sidebar, click on "Collaborators."
- Enter your teammates' GitHub usernames or emails and click "Add collaborator."

## 5. Installing Git and GitHub Desktop
Having the right tools installed will streamline the development process.

### Step 5.1: Install Git
- Visit the [official Git website](https://git-scm.com/downloads) to download the Git installer for your operating system.
- Run the installer and follow the on-screen instructions to complete the installation.

### Step 5.2: Install GitHub Desktop
- Go to the [GitHub Desktop download page](https://desktop.github.com/).
- Download and install GitHub Desktop.
- After installation, open GitHub Desktop and sign in using your GitHub credentials. This tool provides a graphical interface that makes managing and collaborating on projects easier.

## 6. Setting up GitHub with IDEs

Having your IDE integrated with GitHub can streamline your workflow. Below are the setup guides for Visual Studio, Visual Studio Code, and IntelliJ.

### 6.1 Visual Studio

#### Step 6.1.1: Install the GitHub Extension
- Open Visual Studio.
- Go to `Extensions > Manage Extensions`.
- Search for "GitHub Extension for Visual Studio" and install it.

#### Step 6.1.2: Connect to GitHub
- Restart Visual Studio after installing the extension.
- Click on `View > Team Explorer`.
- In Team Explorer, click on the plug icon (Connect) > Manage Connections > Connect to GitHub.
- Sign in using your GitHub credentials.

### 6.2 Visual Studio Code

#### Step 6.2.1: Install the GitHub Extension
- Open Visual Studio Code.
- Go to Extensions (you can use the shortcut `Ctrl+Shift+X`).
- Search for "GitHub Pull Requests and Issues" and install it.

#### Step 6.2.2: Connect to GitHub
- After installing the extension, you'll see a "GitHub" icon on the sidebar.
- Click on the icon and you'll be prompted to sign in to GitHub.

### 6.3 IntelliJ IDEA

#### Step 6.3.1: Open Settings
- Start IntelliJ IDEA and open a project.
- Go to `File > Settings` (or `IntelliJ IDEA > Preferences` on macOS).

#### Step 6.3.2: Add GitHub Integration
- In the Settings window, navigate to `Version Control > GitHub`.
- Click on the `+` button to add an account.
- Sign in using your GitHub credentials.

---

By integrating your IDE with GitHub, you'll be able to manage your repositories, make commits, and collaborate without switching between multiple applications. It's a great way to enhance productivity and make the development process smoother.


---

With these steps, you'll be set to start practicing and collaborating on projects using GitHub and Git. Communication and syncing your work regularly with your teammates is the key to successful collaboration!
