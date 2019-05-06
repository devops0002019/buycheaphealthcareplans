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
       brand:    "Insurance",
       url1:    "index.html",
       label1:    "Health Insurance",
   }
];
function navbar_template(navbar) {
   return `
    <ul class="menu-list">
        <li><i class="fas fa-band-aid fa-4x color-secondary"></i></li>
        <li><h3>(555)555-5555</h3></li>
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
        <h4>The #1 Insurance Site</h4>
        <h4>Copyright 1995 - 2019. Progressive Casualty Insurance Company. All Rights Reserved.</h4>
        <p>We offer insurance by phone, online and through independent agents. Prices vary based on how you
        buy.</p>
        <p>Mobile rates are for policies purchased directly from Progressive.</p>
         <p>*National average annual car insurance savings by new customers surveyed who saved with
        Progressive in 2018.</p>
        <p>Progressive Home Advantage® policies are placed through Progressive Advantage Agency, Inc. with
        affiliated and third-party insurers who are solely responsible for claims, and pay PAA
        commission for policies sold. Prices, coverages, privacy policies, and PAA's commission vary
        among these insurers. How you buy (phone, online, mobile, or independent agent/broker)
        determines which insurers are available to you. Click here for a list of the insurers or contact
        us for more information about PAA's commission. Discounts not available in all states and
        situations.</p>
    </div>
    </div>
  `;
}

document.getElementById("footer").innerHTML = `${footer_data.map(footer_template).join('')}`;
document.getElementById("year").innerHTML = new Date().getFullYear();
