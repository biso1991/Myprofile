#!/bin/bash

# 🚀 Portfolio Deployment Script
# This script helps you deploy your portfolio to GitHub Pages

echo "🎨 =========================================="
echo "   Bilel Nasri Portfolio Deployment Script"
echo "==========================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git is not installed"
    echo "Please install git first: sudo apt install git"
    exit 1
fi

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "⚠️  Warning: GitHub CLI (gh) is not installed"
    echo "You can install it or create the repo manually on GitHub"
fi

# Get current directory
PORTFOLIO_DIR=$(pwd)

echo "📂 Portfolio directory: $PORTFOLIO_DIR"
echo ""

# Ask for repository name
read -p "Enter GitHub repository name [default: bilel-nasri-portfolio]: " REPO_NAME
REPO_NAME=${REPO_NAME:-bilel-nasri-portfolio}

echo ""
echo "📝 Repository will be created as: biso1991/$REPO_NAME"
echo ""

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git repository already initialized"
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "📝 Creating .gitignore..."
    cat > .gitignore << EOL
# System files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log
EOL
    echo "✅ .gitignore created"
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Create initial commit
echo "💾 Creating commit..."
git commit -m "Initial portfolio commit - Professional Data Engineer & AI Engineer Portfolio"

# Rename branch to main if needed
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "🔄 Renaming branch to main..."
    git branch -M main
fi

echo ""
echo "✅ Local repository ready!"
echo ""

# Check if gh CLI is available
if command -v gh &> /dev/null; then
    echo "🚀 Creating GitHub repository using GitHub CLI..."
    
    # Check if authenticated
    if gh auth status &> /dev/null; then
        # Create repository
        gh repo create "biso1991/$REPO_NAME" --public --source=. --remote=origin --push --description="Professional portfolio website showcasing Data Engineering and AI Engineering projects"
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "🎉 =========================================="
            echo "   Portfolio successfully deployed!"
            echo "==========================================="
            echo ""
            echo "📍 Repository: https://github.com/biso1991/$REPO_NAME"
            echo ""
            echo "🌐 Enabling GitHub Pages..."
            
            # Enable GitHub Pages
            gh api repos/biso1991/$REPO_NAME/pages \
                -X POST \
                -H "Accept: application/vnd.github+json" \
                -f source[branch]=main \
                -f source[path]=/
            
            if [ $? -eq 0 ]; then
                echo ""
                echo "✅ GitHub Pages enabled!"
                echo ""
                echo "🌐 Your portfolio will be live at:"
                echo "   https://biso1991.github.io/$REPO_NAME/"
                echo ""
                echo "⏰ It may take 1-2 minutes for the site to be published."
            else
                echo ""
                echo "⚠️  GitHub Pages setup failed. Enable manually:"
                echo "   1. Go to https://github.com/biso1991/$REPO_NAME/settings/pages"
                echo "   2. Under 'Source', select branch 'main' and folder '/' (root)"
                echo "   3. Click 'Save'"
            fi
            
            echo ""
            echo "📝 Next steps:"
            echo "   1. Wait 1-2 minutes for deployment"
            echo "   2. Visit your live portfolio"
            echo "   3. Share the link on LinkedIn and your resume!"
        else
            echo "❌ Failed to create repository"
            exit 1
        fi
    else
        echo "❌ GitHub CLI is not authenticated"
        echo "Please run: gh auth login"
        exit 1
    fi
else
    echo "📋 Manual deployment instructions:"
    echo ""
    echo "1. Create a new repository on GitHub:"
    echo "   - Go to: https://github.com/new"
    echo "   - Repository name: $REPO_NAME"
    echo "   - Description: Professional portfolio website"
    echo "   - Make it Public"
    echo "   - DO NOT initialize with README"
    echo ""
    echo "2. Connect and push your code:"
    echo ""
    echo "   git remote add origin https://github.com/biso1991/$REPO_NAME.git"
    echo "   git push -u origin main"
    echo ""
    echo "3. Enable GitHub Pages:"
    echo "   - Go to: https://github.com/biso1991/$REPO_NAME/settings/pages"
    echo "   - Source: Deploy from branch 'main'"
    echo "   - Folder: / (root)"
    echo "   - Click 'Save'"
    echo ""
    echo "4. Your site will be live at:"
    echo "   https://biso1991.github.io/$REPO_NAME/"
fi

echo ""
echo "🎊 Done! Happy showcasing! 🚀"
