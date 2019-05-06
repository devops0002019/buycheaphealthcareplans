document.documentElement.style .setProperty('--primary', '#00334e');
document.documentElement.style .setProperty('--secondary', '#00334e');
document.documentElement.style .setProperty('--tertiary', '#FAFAFA');
document.documentElement.style .setProperty('--quaternary', '#FAFAFA');
document.documentElement.style .setProperty('--border', '#d8d8d8');
document.documentElement.style .setProperty('--page-max-width', '1024px');
document.documentElement.style .setProperty('--navbar-background', 'transparent');
document.documentElement.style .setProperty('--navbar-text-color', 'white');
document.documentElement.style .setProperty('--header-background', '#00334e');
document.documentElement.style .setProperty('--header-text-color', 'white');
document.documentElement.style .setProperty('--footer-background', '#fff');
document.documentElement.style .setProperty('--footer-text-color', 'white');
document.documentElement.style .setProperty('--h1-color', 'black');
document.documentElement.style .setProperty('--h2-color', '#000');
document.documentElement.style .setProperty('--h3-color', '#262626');


const navbar_data = [
   {
       brand:    "Buy Cheap Healthcare Plans",
       url1:    "index.html",
       label1:    "Health Insurance",
   }
];
function navbar_template(navbar) {
   return `
    <ul class="menu-list">
    <i class="fas fa-universal-access fa-4x"></i>
        <li><h3>${navbar.brand}</h3></li>
    </ul>
 `;
}

document.getElementById("navbar-empty").innerHTML = `${navbar_data.map(navbar_template).join('')}`;


const footer_data = [
   {
       url1:    "https://www.facebook.com",
       label1:  "www.mylinks.com",
   }
];
function footer_template(foot) {
    return `
    <div class="grid set-cols-1">
    <div class="column start-vertical-between">

        <h4>The #1 Insurance Quotes Site</h4>

        <h4>Copyright 2019. Buy Cheap Healthcare Plans. All Rights Reserved.</h4>

        <p><b>Attention:</b>In offering this website, eHealthInsurance Services, Inc. is required to comply with all applicable federal law, including the standards established under 45 CFR 155.220(c) and (d) and standards established under 45 CFR 155.260 to protect the privacy and security of personally identifiable information. This website may not display all data on Qualified Health Plans (QHPs) being offered in your state through the Health Insurance MarketplaceSM website. </p>

        <ul class="menu-list flex-start">
           <li> <a class="link" href="privacy.html">Private Policy</a></li>
           <li><a class="link" href="disclaimer.html">Disclaimer</a></li>
        </ul>
    </div>
    </div>
  `;
}

document.getElementById("footer").innerHTML = `${footer_data.map(footer_template).join('')}`;
document.getElementById("year").innerHTML = new Date().getFullYear();
