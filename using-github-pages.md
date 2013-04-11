# Using GitHub Pages for Hackathon Web Hosting

This guide is intended to provide F2 Hackathon participants instructions for using a quick and easy hosting solution. By committing code to GitHub Pages (`gh-pages`), you'll have public access to your assets at:

`http://YOUR_USER_NAME.github.io/Hackathon/`

You need a GitHub account to proceed. [Sign up for free](https://github.com/signup/free).

## Disclaimer

Using GitHub Pages makes any static resources (HTML, CSS, JS) available to the **public**. If you don't want your code in the public domain, **do not use this option**.

Also:

* GitHub Pages does not provide SSL support
* This is only an option for static resources (there is no PHP, Java or C# available on `gh-pages`).

## Setup

If you don't have Git installed, install it. [GitHub provides a step-by-step tutorial](https://help.github.com/articles/set-up-git).

If you don't want to use the command line, there are Windows and Mac clients available.

* [GitHub for Mac](http://mac.github.com/)
* [GitHub for Windows](http://windows.github.com/)

## Fork the Hackathon Repo


### Step 1: Fork

Once you have Git and GitHub installed, you need to **fork** the Hackathon repo.  

![](https://github-images.s3.amazonaws.com/help/Bootcamp-Fork.png)

### Step 2: Clone

You've successfully forked the Hackathon repository, but so far it only exists on GitHub. To be able to work on the project, you will need to clone it to your local machine.

Run the following code:

`git clone git@github.com:YOUR_USER_NAME/Hackathon.git`

Or get help: [Fork a repo](https://help.github.com/articles/fork-a-repo) and [working with repositories](https://help.github.com/articles/working-with-repositories).

## Checkout `gh-pages`

All of your code must be in the `gh-pages` branch in your Hackathon repository. Simply switch from `master` to `gh-pages`.

`git checkout gh-pages`

## Add Your code

Create a folder for your code within the `gh-pages` branch. Develop something, test it, commit it, then push it to GitHub.

Commit your code:

`git commit -a -m 'Adding my great code'`

Finally push it to GitHub:

`git push origin gh-pages`

## Wait 

Once changes are committed to `gh-pages`, you'll need to wait a couple of minutes for them to appear. Then rejoice!

[`http://YOUR_USER_NAME.github.io/Hackathon/`](http://YOUR_USER_NAME.github.io.github.io/Hackathon/)

## Help

If you need help working with GitHub Pages, review [pages.github.com](http://pages.github.com/) or find someone in the [F2 Working Group](mailto:BLD-F2WorkingGroup@markit.com).