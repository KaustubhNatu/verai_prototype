// Verai Application JavaScript

// Video posts data
const videoPostsData = {
  "videoPosts": [
    {
      "id": 1,
      "username": "healthguru2024",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      "caption": "Breaking: New study shows drinking green tea prevents all types of cancer! Share to save lives! 🍵",
      "videoThumbnail": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop",
      "likes": "12.5K",
      "shares": "3.2K",
      "verdict": "false",
      "explanation": "This claim exaggerates preliminary research. While green tea has health benefits, no single food prevents 'all types' of cancer."
    },
    {
      "id": 2,
      "username": "newsupdates_live",
      "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face",
      "caption": "URGENT: Major earthquake predicted for California next week by top scientists. Prepare now!",
      "videoThumbnail": "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=600&fit=crop",
      "likes": "45.2K",
      "shares": "18.7K",
      "verdict": "false",
      "explanation": "Earthquakes cannot be accurately predicted with specific timing. No legitimate scientific organization has made this prediction."
    },
    {
      "id": 3,
      "username": "climate_facts",
      "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      "caption": "NASA confirms 2023 was the hottest year on record. Here's what the data shows about climate change.",
      "videoThumbnail": "https://images.unsplash.com/photo-1569163139394-de44cb518fd0?w=400&h=600&fit=crop",
      "likes": "8.9K",
      "shares": "2.1K",
      "verdict": "credible",
      "explanation": "This aligns with official NASA and NOAA reports confirming 2023 as the warmest year in their temperature records."
    },
    {
      "id": 4,
      "username": "tech_reviewer",
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      "caption": "iPhone 15 review: The new camera system is a game-changer for mobile photography",
      "videoThumbnail": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=600&fit=crop",
      "likes": "15.3K",
      "shares": "4.5K",
      "verdict": "credible",
      "explanation": "This appears to be a subjective product review based on the creator's experience, which is appropriate opinion content."
    },
    {
      "id": 5,
      "username": "financial_tips",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      "caption": "Secret crypto strategy that guarantees 500% returns in 30 days! DM me for details 💰",
      "videoThumbnail": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=600&fit=crop",
      "likes": "23.1K",
      "shares": "7.8K",
      "verdict": "false",
      "explanation": "No investment strategy can guarantee returns, especially not 500% in 30 days. This is likely a scam or misleading investment advice."
    },
    {
      "id": 6,
      "username": "cooking_with_sarah",
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      "caption": "Simple 15-minute pasta recipe perfect for busy weeknights 🍝 Full recipe in comments!",
      "videoThumbnail": "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=600&fit=crop",
      "likes": "5.7K",
      "shares": "1.2K",
      "verdict": "unclear",
      "explanation": "This appears to be recipe content. Without specific health or factual claims to verify, credibility assessment is not applicable."
    },
    {
      "id": 7,
      "username": "vaccine_truth",
      "avatar": "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
      "caption": "EXPOSED: Vaccines contain microchips for government tracking. Wake up people! Share before deleted!",
      "videoThumbnail": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop",
      "likes": "67.4K",
      "shares": "29.3K",
      "verdict": "false",
      "explanation": "This is a debunked conspiracy theory. Vaccines do not contain microchips. This has been thoroughly investigated by health authorities worldwide."
    },
    {
      "id": 8,
      "username": "local_reporter",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      "caption": "City council approves new public transportation funding for electric bus fleet starting 2025",
      "videoThumbnail": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=600&fit=crop",
      "likes": "2.3K",
      "shares": "456",
      "verdict": "credible",
      "explanation": "This appears to be straightforward local news reporting that can be verified through official city council records and meetings."
    }
  ]
};

// Global variables
let checkedVideos = new Set();

// Utility functions
function getTimeAgo(postId) {
  const times = ['2h', '5h', '8h', '1d', '2d', '3d', '1w', '2w'];
  return times[postId % times.length];
}

function formatNumber(num) {
  if (num.includes('K')) return num;
  const number = parseInt(num);
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'K';
  }
  return number.toString();
}

// Create video post HTML
function createVideoPostHTML(post) {
  const isChecked = checkedVideos.has(post.id);
  return `
    <div class="video-post ${isChecked ? 'checked' : ''}" data-post-id="${post.id}">
      <div class="post-header">
        <img src="${post.avatar}" alt="${post.username}" class="user-avatar" />
        <div class="user-info">
          <h3 class="username">@${post.username}</h3>
          <p class="post-time">${getTimeAgo(post.id)} ago</p>
        </div>
      </div>
      
      <div class="video-container" onclick="openVideoModal('${post.username}')">
        <img src="${post.videoThumbnail}" alt="Video thumbnail" class="video-thumbnail" />
        <div class="video-overlay">▶️</div>
      </div>
      
      <div class="post-content">
        <p class="post-caption">${post.caption}</p>
        
        <div class="post-actions">
          <button class="action-btn">
            <span>❤️</span>
            <span>${post.likes}</span>
          </button>
          <button class="action-btn">
            <span>💬</span>
            <span>124</span>
          </button>
          <button class="action-btn">
            <span>🔗</span>
            <span>${post.shares}</span>
          </button>
        </div>
        
        <button class="credibility-btn" onclick="checkCredibility(${post.id})">
          <span>🛡️</span>
          <span>Check Credibility</span>
        </button>
      </div>
    </div>
  `;
}

// Initialize the feed
function initializeFeed() {
  const feedContainer = document.getElementById('feedContainer');
  const posts = videoPostsData.videoPosts;
  
  feedContainer.innerHTML = posts.map(post => createVideoPostHTML(post)).join('');
}

// Credibility checking functionality
async function checkCredibility(postId) {
  const post = videoPostsData.videoPosts.find(p => p.id === postId);
  if (!post) return;

  // Mark as checked
  checkedVideos.add(postId);
  updatePostCheckedStatus(postId);

  // Open modal and show loading
  openVerdictModal();
  showLoading();

  // Simulate AI processing steps
  await simulateAIProcessing();

  // Show verdict
  showVerdict(post);
}

function updatePostCheckedStatus(postId) {
  const postElement = document.querySelector(`[data-post-id="${postId}"]`);
  if (postElement) {
    postElement.classList.add('checked');
  }
}

async function simulateAIProcessing() {
  const steps = ['step1', 'step2', 'step3'];
  
  for (let i = 0; i < steps.length; i++) {
    // Remove active class from all steps
    steps.forEach(stepId => {
      document.getElementById(stepId).classList.remove('active');
    });
    
    // Add active class to current step
    document.getElementById(steps[i]).classList.add('active');
    
    // Wait for step duration
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

function showLoading() {
  document.getElementById('loadingContainer').classList.remove('hidden');
  document.getElementById('verdictContainer').classList.add('hidden');
  
  // Reset steps
  document.getElementById('step1').classList.add('active');
  document.getElementById('step2').classList.remove('active');
  document.getElementById('step3').classList.remove('active');
}

function showVerdict(post) {
  document.getElementById('loadingContainer').classList.add('hidden');
  document.getElementById('verdictContainer').classList.remove('hidden');
  
  const badge = document.getElementById('verdictBadge');
  const icon = document.getElementById('verdictIcon');
  const text = document.getElementById('verdictText');
  const explanation = document.getElementById('verdictExplanation');
  
  // Clear previous classes
  badge.className = 'verdict-badge';
  
  // Set verdict content based on type
  switch (post.verdict) {
    case 'credible':
      badge.classList.add('credible');
      icon.textContent = '✅';
      text.textContent = 'Likely Credible';
      break;
    case 'false':
      badge.classList.add('false');
      icon.textContent = '❌';
      text.textContent = 'Likely False';
      break;
    case 'unclear':
      badge.classList.add('unclear');
      icon.textContent = '⚠️';
      text.textContent = 'Unclear / Needs Fact Check';
      break;
  }
  
  explanation.textContent = post.explanation;
}

// Modal management
function openVerdictModal() {
  document.getElementById('verdictModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVerdictModal() {
  document.getElementById('verdictModal').classList.add('hidden');
  document.body.style.overflow = '';
}

function openVideoModal(username) {
  document.getElementById('videoModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  document.getElementById('videoModal').classList.add('hidden');
  document.body.style.overflow = '';
}

function openLearnMore() {
  // In a real app, this would open educational content
  alert('In the full application, this would provide educational resources about fact-checking and media literacy.');
}

// Keyboard event handling
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeVerdictModal();
    closeVideoModal();
  }
});

// Prevent modal close when clicking inside modal content
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal-content') || 
      event.target.closest('.modal-content')) {
    event.stopPropagation();
  }
});

// Touch/click handlers for better mobile experience
document.addEventListener('touchstart', function() {}, { passive: true });

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeFeed();
  
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // Add intersection observer for scroll animations (optional enhancement)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1
    });
    
    // Observe all video posts after a short delay
    setTimeout(() => {
      document.querySelectorAll('.video-post').forEach(post => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        post.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(post);
      });
    }, 100);
  }
});

// Add some randomization to make the prototype feel more dynamic
function addRandomVariation() {
  // Randomly vary the processing time slightly
  const baseTime = 1000;
  const variation = Math.random() * 500; // 0-500ms variation
  return baseTime + variation;
}

// Enhanced simulateAIProcessing with slight randomization
async function simulateAIProcessing() {
  const steps = ['step1', 'step2', 'step3'];
  
  for (let i = 0; i < steps.length; i++) {
    // Remove active class from all steps
    steps.forEach(stepId => {
      document.getElementById(stepId).classList.remove('active');
    });
    
    // Add active class to current step
    document.getElementById(steps[i]).classList.add('active');
    
    // Wait for step duration with slight randomization
    const duration = addRandomVariation();
    await new Promise(resolve => setTimeout(resolve, duration));
  }
}

// Export functions for global access
window.checkCredibility = checkCredibility;
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.closeVerdictModal = closeVerdictModal;
window.openLearnMore = openLearnMore;