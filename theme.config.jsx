export default {
    // Project link configuration
    project: {
      link: 'https://github.com/OpenVirtualCluster', // GitHub repo URL
    },
  
    // Website logo
    logo: (
      <span>
        My Docs Website
        <span style={{ color: 'transparent', marginLeft: '0.3rem' }}>▪</span>
      </span>
    ),
  
    // Show "Last Updated" time for each page
    gitTimestamp: null,
  
    // Footer text
    footer: (
      <small>
        <span>© {new Date().getFullYear()} Your Company Name. All rights reserved.</span>
        <a href="https://openvirtualcluster.dev" target="_blank">
          Your Company Website
        </a>
      </small>
    ),
  
    // Customize the main navigation menu
    navs: [
      {
        url: 'https://github.com/OpenVirtualCluster/virtual-cluster-operator',
        name: 'Operator',
      },
      {
        url: 'https://github.com/OpenVirtualCluster/dashboard',
        name: 'Dashboard',
      },
      {
        url: 'https://github.com/OpenVirtualCluster/cli',
        name: 'CLI',
      },
      // Add more nav links here
    ],
  
    // Customize the sidebar navigation menu
    sidebar: {
      defaultMenuCollapseLevel: 2, // Expand/collapse sidebar navigation menu by default
    },
  
    // Customize the table of contents (TOC)
    toc: {
      float: true, // Make the TOC float over the page content
    },
  
    // Customize the search behavior
    search: {
      placeholder: 'Search documentation...',
    },
  
    // Customize the primary color
    primaryHue: 204, // Change the primary color hue (0-360)
  
    // Add a chat link in the top right corner
    chat: {
      link: 'https://discord.gg/uBX8j9mnu6', // Discord invite link
    },
  
    // Add an edit link in the top right corner
    editLink: {
      text: 'Edit this page on GitHub',
    },
  
    // Add a feedback link in the top right corner
    feedback: {
      content: 'Question? Give feedback →',
      labels: 'feedback', // GitHub issue labels for collected feedback
    },
  }
  