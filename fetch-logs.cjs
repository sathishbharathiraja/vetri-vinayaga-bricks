const fs = require('fs');
fetch('https://api.github.com/repos/sathishbharathiraja/vetri-vinayaga-bricks/actions/runs?per_page=1')
  .then(r => r.json())
  .then(d => fetch(d.workflow_runs[0].jobs_url))
  .then(r => r.json())
  .then(d => {
    const job = d.jobs[0];
    console.log("Job status:", job.status, "Conclusion:", job.conclusion);
    return fetch(`https://api.github.com/repos/sathishbharathiraja/vetri-vinayaga-bricks/actions/jobs/${job.id}/logs`);
  })
  .then(r => r.text())
  .then(logs => {
    fs.writeFileSync('gh-logs.txt', logs);
    console.log("Logs saved to gh-logs.txt");
  })
  .catch(console.error);
