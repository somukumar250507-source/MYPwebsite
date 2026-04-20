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
        if (href === currentPage || (currentPage === '' && href === 'index.html')) { 
            link.classList.add('active'); 
        }
    }

    if (document.getElementById('committeesGrid')) { renderCommittees('committeesGrid'); }
    if (document.getElementById('guestsGrid')) { renderChiefGuests('guestsGrid'); }
    if (document.getElementById('chairmansGrid')) { renderChairmans('chairmansGrid'); }
    if (document.getElementById('trusteesGrid')) { renderTrustees('trusteesGrid'); }
    if (document.getElementById('facultyGrid')) { renderFaculty('facultyGrid'); }
    if (document.getElementById('studentGrid')) { renderStudents('studentGrid'); }
    if (document.getElementById('galleryGrid')) { renderGallery('galleryGrid'); }
    if (document.getElementById('contactGrid')) { renderContacts('contactGrid'); }
    if (document.getElementById('contactInfo')) { renderContactInfo('contactInfo'); }
    if (document.getElementById('detailName')) { renderCommitteeDetail(); }
});

var committees = [
    { id: 1, name: "Maharashtra State Legislative Assembly", desc: "State legislature simulation focusing on regional governance, bills and floor procedures. Delegates will experience the intricacies of state-level lawmaking and policy implementation.", agenda: "Review of State Education Policy and Urban Development Reforms", strength: "60-80 delegates", chairTitle: "Speaker", viceChairTitle: "Deputy Speaker", ebMembers: [{ name: "To Be Announced", role: "Speaker" }, { name: "To Be Announced", role: "Deputy Speaker" }], image: "assets/committee-1.jpg" },
    { id: 2, name: "Lok Sabha", desc: "Lower house debates on national bills, budget, and governance accountability. Experience the heat of parliamentary debates and understand the legislative process at the national level.", agenda: "Discussion on Electoral Reforms and Anti-Defection Law", strength: "100-120 delegates", chairTitle: "Speaker", viceChairTitle: "Deputy Speaker", ebMembers: [{ name: "To Be Announced", role: "Speaker" }, { name: "To Be Announced", role: "Deputy Speaker" }], image: "assets/committee-2.jpg" },
    { id: 3, name: "Rajya Sabha (Upper House)", desc: "Upper house deliberations on federal issues, long-term policy, and state representation. Focus on the Council of States and its role in India's federal structure.", agenda: "Centre-State Relations and Fiscal Federalism in India", strength: "50-60 delegates", chairTitle: "Chairperson", viceChairTitle: "Deputy Chairperson", ebMembers: [{ name: "To Be Announced", role: "Chairperson" }, { name: "To Be Announced", role: "Deputy Chairperson" }], image: "assets/committee-3.jpg" },
    { id: 4, name: "The Parliamentary Standing Committee", desc: "Detailed scrutiny of bills, reports, and executive accountability. Work behind the scenes of parliamentary functioning and understand committee systems.", agenda: "Examination of Data Protection and Privacy Bill", strength: "30-40 delegates", chairTitle: "Chairperson", viceChairTitle: "Co-Chairperson", ebMembers: [{ name: "To Be Announced", role: "Chairperson" }, { name: "To Be Announced", role: "Co-Chairperson" }], image: "assets/committee-4.jpg" },
    { id: 5, name: "The Constituent Assembly of India", desc: "Historical constitutional debates, fundamental rights and directive principles. Step into the shoes of our founding fathers and mothers who drafted the Indian Constitution.", agenda: "Revisiting the Debates on Fundamental Rights and Directive Principles", strength: "50-60 delegates", chairTitle: "Chairperson", viceChairTitle: "Vice-Chairperson", ebMembers: [{ name: "To Be Announced", role: "Chairperson" }, { name: "To Be Announced", role: "Vice-Chairperson" }], image: "assets/committee-5.jpg" },
    { id: 6, name: "All India Political Party Meet (AIPPM)", desc: "Cross-party consensus building, coalition politics and national interest. Experience the dynamics of multi-party democracy and coalition governance.", agenda: "Building Consensus on National Security and Internal Threats", strength: "40-50 delegates", chairTitle: "Moderator", viceChairTitle: "Deputy Moderator", ebMembers: [{ name: "To Be Announced", role: "Moderator" }, { name: "To Be Announced", role: "Deputy Moderator" }], image: "assets/committee-6.jpg" },
    { id: 7, name: "Indian Press", desc: "Reporting simulations, press briefings, and journalistic accountability. Experience the Fourth Estate and its crucial role in democracy.", agenda: "Media Ethics and Responsible Reporting in Digital Age", strength: "20-30 delegates", chairTitle: "Editor-in-Chief", viceChairTitle: "Managing Editor", ebMembers: [{ name: "To Be Announced", role: "Editor-in-Chief" }, { name: "To Be Announced", role: "Managing Editor" }], image: "assets/committee-7.jpg" },
    { id: 8, name: "All India Stakeholders Meet (AISM)", desc: "Student-led policy dialogue on education, youth welfare and civic issues. A special committee for school students to engage with policy making.", agenda: "National Education Policy 2020: Implementation Challenges", strength: "50-60 delegates", chairTitle: "Chairperson", viceChairTitle: "Vice-Chairperson", ebMembers: [{ name: "To Be Announced", role: "Chairperson" }, { name: "To Be Announced", role: "Vice-Chairperson" }], isSchool: true, image: "assets/committee-8.jpg" },
    { id: 9, name: "NITI Aayog", desc: "Policy think tank simulation focusing on sustainable development and governance reforms. Experience India's premier policy think tank. (Exclusive for Teach for India fellows)", agenda: "Sustainable Development Goals and India's Progress by 2030", strength: "30-40 delegates", chairTitle: "CEO", viceChairTitle: "Deputy CEO", ebMembers: [{ name: "To Be Announced", role: "CEO" }, { name: "To Be Announced", role: "Deputy CEO" }], isTfi: true, image: "assets/committee-9.jpg" }
];

var chiefGuests = [
    { name: "Justice B.N. Srikrishna", title: "Former Judge, Supreme Court of India", image: "assets/guest-1.jpg" },
    { name: "Justice Madan B. Lokur", title: "Former Judge, Supreme Court of India", image: "assets/guest-2.jpg" },
    { name: "Justice Ajit Prakash Shah", title: "Former Chief Justice, Delhi High Court", image: "assets/guest-3.jpg" },
    { name: "Justice Gautam S. Patel", title: "Judge, Bombay High Court", image: "assets/guest-4.jpg" },
    { name: "Justice S.C. Gupte", title: "Former Judge, Bombay High Court", image: "assets/guest-5.jpg" },
    { name: "Justice S. Radhakrishnan", title: "Former Judge, Bombay High Court (Late)", image: "assets/guest-6.jpg" },
    { name: "Justice Sujata V. Manohar", title: "Former Judge, Supreme Court of India", image: "assets/guest-7.jpg" }
];

var chairmans = [
    { name: "Julio Francis Ribeiro", title: "Chairman Emeritus, Padma Bhushan Awardee", image: "assets/chairman-1.jpg" },
    { name: "D. Sivanandhan", title: "Hon'ble Chairman, PCGT", image: "assets/chairman-2.jpg" }
];

var trustees = ["Dr. R.K. Anand", "Mr. V.P. Raja", "Mr. Gulam Vahanvaty", "Mrs. Ana Saldhana", "Adv. Abha Singh", "Mr. Mahesh Zagade", "Mr. Prasad Chandran", "Mr. Rajesh Desai", "Ms. Rekha Shahani"];

var faculty = [
    { name: "Dr. Navashikha Duara", title: "Principal, Pravin Gandhi College of Law", image: "assets/faculty-1.jpg" },
    { name: "Mrs. Kavita Sharma", title: "Faculty Convenor, Model Youth Parliament", image: "assets/faculty-2.jpg" },
    { name: "Adv. Shivam Jain Kakadia", title: "Convenor, PCGT", image: "assets/faculty-3.jpg" }
];

var students = [
    { name: "Kimaya Desai", role: "President" },
    { name: "Khushi Mandal", role: "General Secretary" },
    { name: "Kesar Sukali", role: "Vice President" },
    { name: "Ishi Chandra", role: "Vice President" },
    { name: "Divyam Murari", role: "Vice President" },
    { name: "Rohan Ghosh", role: "Vice President" }
];

var galleryItems = [
    { title: "Committee in Session", desc: "MYP 2024 Opening Ceremony", image: "assets/MLA.jpg" },
    { title: "Organising Committee", desc: "Meet the previous organising team", image: "assets/OC.jpg" },
    { title: "Award Ceremony", desc: "Best Delegate Awards", image: "assets/AWARD.jpg" },
    { title: "School Committee", desc: "School Committee in Session", image: "assets/SCHOOL.jpg" },
    { title: "Core Committee ", desc: "Core with our Chief Guest", image: "assets/CORE.jpg" },
    { title: "Guest Lecture", desc: "Justice Sujata Manohar", image: "assets/JUSTICE.jpg" },
 
];

var contacts = [
    { name: "Kimaya Desai", role: "President", phone: "+91 73048 22627" },
    { name: "Khushi Mandal", role: "General Secretary", phone: "+91 98613 17041" },
    { name: "Kesar Sukali", role: "Vice President", phone: "+91 96197 54249" }
];

function getChairperson(c) { return c.ebMembers[0] ? c.ebMembers[0].name : 'To Be Announced'; }
function getViceChairperson(c) { return c.ebMembers[1] ? c.ebMembers[1].name : 'To Be Announced'; }

function renderCommittees(containerId) {
    var container = document.getElementById(containerId); if (!container) return; var html = '';
    for (var i = 0; i < committees.length; i++) {
        var c = committees[i];
        var badge = c.isTfi ? ' <span style="font-size:0.6rem; background:#B8860B20; padding:0.2rem 0.5rem; border-radius:50px;">Teach for India</span>' : (c.isSchool ? ' <span style="font-size:0.6rem; background:#8B2C2C20; padding:0.2rem 0.5rem; border-radius:50px;">School Committee</span>' : '');
        var chair = getChairperson(c); var vice = getViceChairperson(c);
        html += '<div class="committee-card">';
        html += '<div class="card-img" style="background-image: url(\'' + c.image + '\');"></div>';
        html += '<div class="card-content"><h3 class="card-title">' + c.name + badge + '</h3>';
        html += '<p class="card-desc">' + c.desc.substring(0, 80) + '...</p><div class="committee-info">';
        html += '<div class="info-row"><span class="info-label">Agenda:</span><span class="info-value">' + c.agenda + '</span></div>';
        html += '<div class="info-row"><span class="info-label">' + (c.chairTitle||'Chair') + ':</span><span class="info-value">' + chair + '</span></div>';
        html += '<div class="info-row"><span class="info-label">' + (c.viceChairTitle||'Vice-Chair') + ':</span><span class="info-value">' + vice + '</span></div></div>';
        html += '<div class="card-footer"><a href="committee-detail.html?id=' + c.id + '" class="btn-detail">View Details →</a></div></div></div>';
    }
    container.innerHTML = html;
}

function renderChiefGuests(containerId) {
    var container = document.getElementById(containerId); if (!container) return; var html = '';
    for (var i = 0; i < chiefGuests.length; i++) {
        var g = chiefGuests[i];
        html += '<div class="guest-card">';
        html += '<div class="guest-img" style="background-image: url(\'' + g.image + '\');"></div>';
        html += '<div class="guest-content"><h3 class="guest-name">' + g.name + '</h3><p class="guest-title">' + g.title + '</p></div></div>';
    }
    container.innerHTML = html;
}

function renderChairmans(containerId) {
    var container = document.getElementById(containerId); if (!container) return; var html = '';
    for (var i = 0; i < chairmans.length; i++) {
        var c = chairmans[i];
        html += '<div class="team-card">';
        html += '<div class="team-img" style="background-image: url(\'' + c.image + '\');"></div>';
        html += '<h3 style="font-weight: bold;">' + c.name + '</h3><p style="color: #B8860B; font-size: 0.8rem;">' + c.title + '</p></div>';
    }
    container.innerHTML = html;
}

function renderTrustees(containerId) {
    var container = document.getElementById(containerId); if (!container) return; var html = '';
    for (var i = 0; i < trustees.length; i++) {
        html += '<div class="team-card"><p><strong>' + trustees[i] + '</strong></p><p style="color: #B8860B; font-size: 0.75rem;">Trustee</p></div>';
    }
    container.innerHTML = html;
}

function renderFaculty(containerId) {
    var container = document.getElementById(containerId); 
    if (!container) return; 
    var html = '';
    for (var i = 0; i < faculty.length; i++) {
        var f = faculty[i];
        html += '<div class="team-card">';
        html += '<div class="team-img" style="background-image: url(\'' + f.image + '\');"></div>';
        html += '<h3 style="font-weight: bold; font-family: \'Montserrat\', sans-serif;">' + f.name + '</h3>';
        html += '<p style="color: #B8860B; font-size: 0.85rem;">' + f.title + '</p></div>';
    }
    container.innerHTML = html;
}

function renderStudents(containerId) {
    var container = document.getElementById(containerId); if (!container) return; var html = '';
    for (var i = 0; i < students.length; i++) {
        var s = students[i];
        html += '<div class="team-card">';
        html += '<div class="team-img" style="background: linear-gradient(135deg, #EACEAA, #d4bd91); display: flex; align-items: center; justify-content: center; font-size: 2rem; color: #660810;">';
        html += '<i class="fas fa-user"></i></div>';
        html += '<h3 style="font-weight: bold;">' + s.name + '</h3><p style="color: #B8860B;">' + s.role + '</p></div>';
    }
    container.innerHTML = html;
}

function renderGallery(containerId) {
    var container = document.getElementById(containerId); if (!container) return; var html = '';
    for (var i = 0; i < galleryItems.length; i++) {
        var g = galleryItems[i];
        html += '<div class="gallery-card">';
        html += '<div class="gallery-img" style="background-image: url(\'' + g.image + '\');"></div>';
        html += '<div class="gallery-caption"><p style="font-weight: 600; margin-bottom: 0.25rem;">' + g.title + '</p><p style="font-size: 0.8rem; color: #6b5a4a;">' + g.desc + '</p></div></div>';
    }
    container.innerHTML = html;
}

function renderContacts(containerId) {
    var container = document.getElementById(containerId); if (!container) return; var html = '';
    for (var i = 0; i < contacts.length; i++) {
        var c = contacts[i];
        html += '<div class="contact-card">';
        html += '<div class="contact-icon"><i class="fas fa-user-tie"></i></div>';
        html += '<h4 class="contact-name">' + c.name + '</h4><p class="contact-role">' + c.role + '</p>';
        html += '<p class="contact-phone"><i class="fas fa-phone-alt" style="font-size: 0.7rem;"></i> ' + c.phone + '</p></div>';
    }
    container.innerHTML = html;
}

function renderContactInfo(containerId) {
    var container = document.getElementById(containerId); if (!container) return;
    container.innerHTML = '<div style="display: grid; gap: 1rem;"><div style="display: flex; align-items: center; gap: 1rem; justify-content: center;"><i class="fas fa-envelope" style="font-size: 1.5rem; color: #660810;"></i><a href="mailto:publicconcern@gmail.com" style="color: #1A1A1A; text-decoration: none;">publicconcern@gmail.com</a></div><div style="display: flex; align-items: center; gap: 1rem; justify-content: center;"><i class="fab fa-instagram" style="font-size: 1.5rem; color: #660810;"></i><a href="#" style="color: #1A1A1A; text-decoration: none;">@pcgtmy.p</a></div><div style="display: flex; align-items: center; gap: 1rem; justify-content: center;"><i class="fas fa-globe" style="font-size: 1.5rem; color: #660810;"></i><a href="#" style="color: #1A1A1A; text-decoration: none;">www.pcgt.org</a></div><div style="display: flex; align-items: flex-start; gap: 1rem; justify-content: center; margin-top: 1rem;"><i class="fas fa-map-marker-alt" style="font-size: 1.5rem; color: #660810;"></i><span style="color: #1A1A1A; max-width: 400px;">B/2, Mahalaxmi Chambers, 22, Bhulabhai Desai Road, MUMBAI – 400026</span></div></div>';
}

function renderCommitteeDetail() {
    var urlParams = new URLSearchParams(window.location.search);
    var id = parseInt(urlParams.get('id')) || 1;
    var c = null;
    for (var i = 0; i < committees.length; i++) { 
        if (committees[i].id === id) { 
            c = committees[i]; 
            break; 
        } 
    }
    if (!c) c = committees[0];
    
    document.getElementById('detailName').textContent = c.name;
    document.getElementById('breadcrumbName').textContent = c.name;
    document.getElementById('detailDesc').textContent = c.desc;
    document.getElementById('detailAgenda').textContent = c.agenda;
    document.getElementById('detailStrength').textContent = c.strength;
    
    var detailImage = document.getElementById('detailImage');
    if (detailImage) {
        detailImage.src = c.image;
    }
    
    var chairLabel = document.getElementById('chairLabel');
    var viceChairLabel = document.getElementById('viceChairLabel');
    if (chairLabel) chairLabel.textContent = c.chairTitle || 'Chair';
    if (viceChairLabel) viceChairLabel.textContent = c.viceChairTitle || 'Vice Chair';
    
    var detailChair = document.getElementById('detailChair');
    var detailViceChair = document.getElementById('detailViceChair');
    if (detailChair) detailChair.textContent = getChairperson(c);
    if (detailViceChair) detailViceChair.textContent = getViceChairperson(c);
    
    var eb = document.getElementById('ebMembersGrid');
    if (eb) {
        var html = '';
        for (var i = 0; i < c.ebMembers.length; i++) {
            var m = c.ebMembers[i];
            html += '<div class="team-card">';
            html += '<div class="team-img" style="background: linear-gradient(135deg, #EACEAA, #d4bd91); display: flex; align-items: center; justify-content: center; font-size: 2rem; color: #660810;">';
            html += '<i class="fas fa-user-tie"></i></div>';
            html += '<h4 style="font-weight: bold;">' + m.name + '</h4>';
            html += '<p style="color: #B8860B; font-size: 0.8rem;">' + m.role + '</p></div>';
        }
        eb.innerHTML = html;
    }
}
