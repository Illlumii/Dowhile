const linksSocialMedia = {
    github: "Illlumii",
    facebook: "profile.php?id=100004743313822",
    instagram: "gabriel.ssilvaa",
    linkedin: "in/gabriel-dos-santos-silva-865583249"
  }
  
  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')
        
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
  }
      
  changeSocialMediaLinks()
  
  function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    
    fetch(url) 
      .then(response => response.json())
      .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        UserImage.src = data.avatar_url
      })
  }
  
  getGitHubProfileInfos()