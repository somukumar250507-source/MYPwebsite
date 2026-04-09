
document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('mobileToggle');
    var mobileNav = document.getElementById('mobileNav');
    if (toggleBtn && mobileNav) {
        toggleBtn.addEventListener('click', function() {
            if (mobileNav.classList.contains('show')) { mobileNav.classList.remove('show'); }
            else { mobileNav.classList.add('show'); }
        });
    }
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
    for (var i = 0; i < navLinks.length; i++) {
        var link = navLinks[i];
        var href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) { link.classList.add('active'); }
    }
});

var committees = [
    { id: 1, name: "Maharashtra State Legislative Assembly", desc: "State legislature simulation focusing on regional governance, bills and floor procedures. Delegates will experience the intricacies of state-level lawmaking and policy implementation.", agenda: "Review of State Education Policy and Urban Development Reforms", strength: "60-80 delegates", chairTitle: "Speaker", viceChairTitle: "Deputy Speaker", ebMembers: [{ name: "To Be Announced", role: "Speaker" }, { name: "To Be Announced", role: "Deputy Speaker" }] },
    { id: 2, name: "Lok Sabha", desc: "Lower house debates on national bills, budget, and governance accountability. Experience the heat of parliamentary debates and understand the legislative process at the national level.", agenda: "Discussion on Electoral Reforms and Anti-Defection Law", strength: "100-120 delegates", chairTitle: "Speaker", viceChairTitle: "Deputy Speaker", ebMembers: [{ name: "To Be Announced", role: "Speaker" }, { name: "To Be Announced", role: "Deputy Speaker" }] },
    { id: 3, name: "Rajya Sabha (Upper House)", desc: "Upper house deliberations on federal issues, long-term policy, and state representation. Focus on the Council of States and its role in India's federal structure.", agenda: "Centre-State Relations and Fiscal Federalism in India", strength: "50-60 delegates", chairTitle: "Chairperson", viceChairTitle: "Deputy Chairperson", ebMembers: [{ name: "To Be Announced", role: "Chairperson" }, { name: "To Be Announced", role: "Deputy Chairperson" }] },
    { id: 4, name: "The Parliamentary Standing Committee", desc: "Detailed scrutiny of bills, reports, and executive accountability. Work behind the scenes of parliamentary functioning and understand committee systems.", agenda: "Examination of Data Protection and Privacy Bill", strength: "30-40 delegates", chairTitle: "Chairperson", viceChairTitle: "Co-Chairperson", ebMembers: [{ name: "To Be Announced", role: "Chairperson" }, { name: "To Be Announced", role: "Co-Chairperson" }] },
    { id: 5, name: "The Constituent Assembly of India", desc: "Historical constitutional debates, fundamental rights and directive principles. Step into the shoes of our founding fathers and mothers who drafted the Indian Constitution.", agenda: "Revisiting the Debates on Fundamental Rights and Directive Principles", strength: "50-60 delegates", chairTitle: "Chairperson", viceChairTitle: "Vice-Chairperson", ebMembers: [{ name: "To Be Announced", role: "Chairperson" }, { name: "To Be Announced", role: "Vice-Chairperson" }] },
    { id: 6, name: "All India Political Party Meet (AIPPM)", desc: "Cross-party consensus building, coalition politics and national interest. Experience the dynamics of multi-party democracy and coalition governance.", agenda: "Building Consensus on National Security and Internal Threats", strength: "40-50 delegates", chairTitle: "Moderator", viceChairTitle: "Deputy Moderator", ebMembers: [{ name: "To Be Announced", role: "Moderator" }, { name: "To Be Announced", role: "Deputy Moderator" }] },
    { id: 7, name: "Indian Press", desc: "Reporting simulations, press briefings, and journalistic accountability. Experience the Fourth Estate and its crucial role in democracy.", agenda: "Media Ethics and Responsible Reporting in Digital Age", strength: "20-30 delegates", chairTitle: "Editor-in-Chief", viceChairTitle: "Managing Editor", ebMembers: [{ name: "To Be Announced", role: "Editor-in-Chief" }, { name: "To Be Announced", role: "Managing Editor" }] },
    { id: 8, name: "All India Stakeholders Meet (AISM)", desc: "Student-led policy dialogue on education, youth welfare and civic issues. A special committee for school students to engage with policy making.", agenda: "National Education Policy 2020: Implementation Challenges", strength: "50-60 delegates", chairTitle: "Chairperson", viceChairTitle: "Vice-Chairperson", ebMembers: [{ name: "To Be Announced", role: "Chairperson" }, { name: "To Be Announced", role: "Vice-Chairperson" }], isSchool: true },
    { id: 9, name: "NITI Aayog", desc: "Policy think tank simulation focusing on sustainable development and governance reforms. Experience India's premier policy think tank. (Exclusive for Teach for India fellows)", agenda: "Sustainable Development Goals and India's Progress by 2030", strength: "30-40 delegates", chairTitle: "CEO", viceChairTitle: "Deputy CEO", ebMembers: [{ name: "To Be Announced", role: "CEO" }, { name: "To Be Announced", role: "Deputy CEO" }], isTfi: true }
];

var chiefGuests = [
    { name: "Justice B.N. Srikrishna", title: "Former Judge, Supreme Court of India", icon: "gavel" },
    { name: "Justice Madan B. Lokur", title: "Former Judge, Supreme Court of India", icon: "gavel" },
    { name: "Justice Ajit Prakash Shah", title: "Former Chief Justice, Delhi High Court", icon: "gavel" },
    { name: "Justice Gautam S. Patel", title: "Judge, Bombay High Court", icon: "gavel" },
    { name: "Justice S.C. Gupte", title: "Former Judge, Bombay High Court", icon: "gavel" },
    { name: "Justice S. Radhakrishnan", title: "Former Judge, Bombay High Court (Late)", icon: "gavel" },
    { name: "Justice Sujata V. Manohar", title: "Former Judge, Supreme Court of India", icon: "gavel" }
];

var chairmans = [
    { name: "Julio Francis Ribeiro", title: "Chairman Emeritus, Padma Bhushan Awardee", icon: "user-shield" },
    { name: "D. Sivanandhan", title: "Hon'ble Chairman, PCGT", icon: "user-graduate" }
];

var trustees = ["Dr. R.K. Anand", "Mr. V.P. Raja", "Mr. Gulam Vahanvaty", "Mrs. Ana Saldhana", "Adv. Abha Singh", "Mr. Mahesh Zagade", "Mr. Prasad Chandran", "Mr. Rajesh Desai", "Ms. Rekha Shahani"];

var faculty = [
    { name: "Dr. Navashikha Duara", title: "Principal, Pravin Gandhi College of Law", icon: "chalkboard-user" },
    { name: "Mrs. Kavita Sharma", title: "Faculty Convenor, Model Youth Parliament", icon: "chalkboard-user" },
    { name: "Adv. Shivam Jain Kakadia", title: "Convenor, PCGT", icon: "user-tie" }
];

var students = [
    { name: "Kimaya Desai", role: "President", icon: "user" },
    { name: "Khushi Mandal", role: "General Secretary", icon: "user" },
    { name: "Kesar Sukali", role: "Vice President", icon: "user" },
    { name: "Ishi Chandra", role: "Vice President", icon: "user" },
    { name: "Divyam Murari", role: "Vice President", icon: "user" },
    { name: "Rohan Ghosh", role: "Vice President", icon: "user" }
];

var galleryItems = [
    { title: "Inaugural Ceremony", desc: "MYP 2024 Opening Ceremony with Chief Guest lighting the lamp", icon: "fa-candle-holder" },
    { title: "Lok Sabha Session", desc: "Delegates engaged in heated parliamentary debate", icon: "fa-users" },
    { title: "Award Ceremony", desc: "Best Delegate Awards Distribution Ceremony", icon: "fa-trophy" },
    { title: "Group Photo", desc: "All delegates with the Executive Board", icon: "fa-camera" },
    { title: "Committee Deliberation", desc: "Rajya Sabha Committee in serious discussion", icon: "fa-comments" },
    { title: "Guest Lecture", desc: "Justice B.N. Srikrishna addressing the delegates", icon: "fa-chalkboard" },
    { title: "Press Conference", desc: "Indian Press committee during mock press briefing", icon: "fa-newspaper" },
    { title: "Cultural Evening", desc: "Delegates showcasing cultural performances", icon: "fa-music" },
    { title: "Closing Ceremony", desc: "Vote of thanks and closing remarks", icon: "fa-handshake" }
];

var contacts = [
    { name: "Kimaya Desai", role: "President", phone: "+91 73048 22627", icon: "fa-user-tie" },
    { name: "Khushi Mandal", role: "General Secretary", phone: "+91 98613 17041", icon: "fa-user-tie" },
    { name: "Kesar Sukali", role: "Vice President", phone: "+91 96197 54249", icon: "fa-user-tie" }
];

function getChairperson(c) { return c.ebMembers[0] ? c.ebMembers[0].name : 'To Be Announced'; }
function getViceChairperson(c) { return c.ebMembers[1] ? c.ebMembers[1].name : 'To Be Announced'; }

function renderCommittees(id) {
    var container = document.getElementById(id); if (!container) return; var html = '';
    for (var i = 0; i < committees.length; i++) {
        var c = committees[i];
        var badge = c.isTfi ? ' <span style="font-size:0.6rem; background:#B8860B20; padding:0.2rem 0.5rem; border-radius:50px;">Teach for India</span>' : (c.isSchool ? ' <span style="font-size:0.6rem; background:#8B2C2C20; padding:0.2rem 0.5rem; border-radius:50px;">School Committee</span>' : '');
        var chair = getChairperson(c); var vice = getViceChairperson(c);
        html += '<div class="committee-card"><div class="card-img"><i class="fas fa-gavel"></i></div><div class="card-content"><h3 class="card-title">' + c.name + badge + '</h3><p class="card-desc">' + c.desc.substring(0, 80) + '...</p><div class="committee-info"><div class="info-row"><span class="info-label">Agenda:</span><span class="info-value">' + c.agenda + '</span></div><div class="info-row"><span class="info-label">' + (c.chairTitle||'Chair') + ':</span><span class="info-value">' + chair + '</span></div><div class="info-row"><span class="info-label">' + (c.viceChairTitle||'Vice-Chair') + ':</span><span class="info-value">' + vice + '</span></div></div><div class="card-footer"><a href="committee-detail.html?id=' + c.id + '" class="btn-detail">View Details →</a></div></div></div>';
    }
    container.innerHTML = html;
}

function renderChiefGuests(id) { var c = document.getElementById(id); if (!c) return; var h = ''; for (var i = 0; i < chiefGuests.length; i++) { var g = chiefGuests[i]; h += '<div class="guest-card"><div class="guest-img"><i class="fas fa-' + g.icon + '"></i></div><div class="guest-content"><h3 class="guest-name">' + g.name + '</h3><p class="guest-title">' + g.title + '</p></div></div>'; } c.innerHTML = h; }
function renderChairmans(id) { var c = document.getElementById(id); if (!c) return; var h = ''; for (var i = 0; i < chairmans.length; i++) { var m = chairmans[i]; h += '<div class="team-card"><div class="team-img"><i class="fas fa-' + m.icon + '"></i></div><h3 style="font-weight: bold;">' + m.name + '</h3><p style="color: #B8860B; font-size: 0.8rem;">' + m.title + '</p></div>'; } c.innerHTML = h; }
function renderTrustees(id) { var c = document.getElementById(id); if (!c) return; var h = ''; for (var i = 0; i < trustees.length; i++) { h += '<div class="team-card"><p><strong>' + trustees[i] + '</strong></p><p style="color: #B8860B; font-size: 0.75rem;">Trustee</p></div>'; } c.innerHTML = h; }
function renderFaculty(id) { var c = document.getElementById(id); if (!c) return; var h = ''; for (var i = 0; i < faculty.length; i++) { var f = faculty[i]; h += '<div class="team-card"><div class="team-img"><i class="fas fa-' + f.icon + '"></i></div><h3 style="font-weight: bold;">' + f.name + '</h3><p>' + f.title + '</p></div>'; } c.innerHTML = h; }
function renderStudents(id) { var c = document.getElementById(id); if (!c) return; var h = ''; for (var i = 0; i < students.length; i++) { var s = students[i]; h += '<div class="team-card"><div class="team-img"><i class="fas fa-' + s.icon + '"></i></div><h3 style="font-weight: bold;">' + s.name + '</h3><p style="color: #B8860B;">' + s.role + '</p></div>'; } c.innerHTML = h; }
function renderGallery(id) { var c = document.getElementById(id); if (!c) return; var h = ''; for (var i = 0; i < galleryItems.length; i++) { var g = galleryItems[i]; h += '<div class="gallery-card"><div class="gallery-img"><i class="fas ' + g.icon + '" style="font-size: 3rem;"></i></div><div class="gallery-caption"><p style="font-weight: 600; margin-bottom: 0.25rem;">' + g.title + '</p><p style="font-size: 0.8rem; color: #6b5a4a;">' + g.desc + '</p></div></div>'; } c.innerHTML = h; }
function renderContacts(id) { var c = document.getElementById(id); if (!c) return; var h = ''; for (var i = 0; i < contacts.length; i++) { var co = contacts[i]; h += '<div class="contact-card"><div class="contact-icon"><i class="fas ' + co.icon + '"></i></div><h4 class="contact-name">' + co.name + '</h4><p class="contact-role">' + co.role + '</p><p class="contact-phone"><i class="fas fa-phone-alt" style="font-size: 0.7rem;"></i> ' + co.phone + '</p></div>'; } c.innerHTML = h; }
function renderContactInfo(id) { var c = document.getElementById(id); if (!c) return; c.innerHTML = '<div style="display: grid; gap: 1rem;"><div style="display: flex; align-items: center; gap: 1rem; justify-content: center;"><i class="fas fa-envelope" style="font-size: 1.5rem; color: #660810;"></i><a href="mailto:publicconcern@gmail.com" style="color: #1A1A1A; text-decoration: none;">publicconcern@gmail.com</a></div><div style="display: flex; align-items: center; gap: 1rem; justify-content: center;"><i class="fab fa-instagram" style="font-size: 1.5rem; color: #660810;"></i><a href="#" style="color: #1A1A1A; text-decoration: none;">@pcgtmy.p</a></div><div style="display: flex; align-items: center; gap: 1rem; justify-content: center;"><i class="fas fa-globe" style="font-size: 1.5rem; color: #660810;"></i><a href="#" style="color: #1A1A1A; text-decoration: none;">www.pcgt.org</a></div><div style="display: flex; align-items: flex-start; gap: 1rem; justify-content: center; margin-top: 1rem;"><i class="fas fa-map-marker-alt" style="font-size: 1.5rem; color: #660810;"></i><span style="color: #1A1A1A; max-width: 400px;">B/2, Mahalaxmi Chambers, 22, Bhulabhai Desai Road, MUMBAI – 400026</span></div></div>'; }

function renderCommitteeDetail() {
    var id = parseInt(new URLSearchParams(window.location.search).get('id')) || 1;
    var c = committees.find(function(x) { return x.id === id; }) || committees[0];
    document.getElementById('detailName').textContent = c.name;
    document.getElementById('breadcrumbName').textContent = c.name;
    document.getElementById('detailDesc').textContent = c.desc;
    document.getElementById('detailAgenda').textContent = c.agenda;
    document.getElementById('detailStrength').textContent = c.strength;
    var eb = document.getElementById('ebMembersGrid'); if (eb) { var h = ''; for (var i = 0; i < c.ebMembers.length; i++) { var m = c.ebMembers[i]; h += '<div class="team-card"><div class="team-img"><i class="fas fa-user-tie"></i></div><h4 style="font-weight: bold;">' + m.name + '</h4><p style="color: #B8860B; font-size: 0.8rem;">' + m.role + '</p></div>'; } eb.innerHTML = h; }
}

