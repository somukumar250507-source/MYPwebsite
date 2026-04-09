document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('mobileToggle');
    var mobileNav = document.getElementById('mobileNav');
    
    if (toggleBtn && mobileNav) {
        toggleBtn.addEventListener('click', function() {
            if (mobileNav.classList.contains('show')) {
                mobileNav.classList.remove('show');
            } else {
                mobileNav.classList.add('show');
            }
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
});

var committees = [
    { 
        id: 1, 
        name: "Maharashtra State Legislative Assembly", 
        desc: "State legislature simulation focusing on regional governance, bills and floor procedures. Delegates will experience the intricacies of state-level lawmaking and policy implementation.", 
        agenda: "Review of State Education Policy and Urban Development Reforms", 
        strength: "60-80 delegates", 
        ebMembers: [
            { name: "To Be Announced", role: "Chairperson" },
            { name: "To Be Announced", role: "Vice-Chairperson" },
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Rapporteur" }
        ] 
    },
    { 
        id: 2, 
        name: "Lok Sabha", 
        desc: "Lower house debates on national bills, budget, and governance accountability. Experience the heat of parliamentary debates and understand the legislative process at the national level.", 
        agenda: "Discussion on Electoral Reforms and Anti-Defection Law", 
        strength: "100-120 delegates", 
        ebMembers: [
            { name: "To Be Announced", role: "Chairperson" },
            { name: "To Be Announced", role: "Vice-Chairperson" },
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Rapporteur" }
        ] 
    },
    { 
        id: 3, 
        name: "Rajya Sabha (Upper House)", 
        desc: "Upper house deliberations on federal issues, long-term policy, and state representation. Focus on the Council of States and its role in India's federal structure.", 
        agenda: "Centre-State Relations and Fiscal Federalism in India", 
        strength: "50-60 delegates", 
        ebMembers: [
            { name: "To Be Announced", role: "Chairperson" },
            { name: "To Be Announced", role: "Vice-Chairperson" },
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Rapporteur" }
        ] 
    },
    { 
        id: 4, 
        name: "The Parliamentary Standing Committee", 
        desc: "Detailed scrutiny of bills, reports, and executive accountability. Work behind the scenes of parliamentary functioning and understand committee systems.", 
        agenda: "Examination of Data Protection and Privacy Bill", 
        strength: "30-40 delegates", 
        ebMembers: [
            { name: "To Be Announced", role: "Chairperson" },
            { name: "To Be Announced", role: "Vice-Chairperson" },
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Executive Board Member" }
        ] 
    },
    { 
        id: 5, 
        name: "The Constituent Assembly of India", 
        desc: "Historical constitutional debates, fundamental rights and directive principles. Step into the shoes of our founding fathers and mothers who drafted the Indian Constitution.", 
        agenda: "Revisiting the Debates on Fundamental Rights and Directive Principles", 
        strength: "50-60 delegates", 
        ebMembers: [
            { name: "To Be Announced", role: "Chairperson" },
            { name: "To Be Announced", role: "Vice-Chairperson" },
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Rapporteur" }
        ] 
    },
    { 
        id: 6, 
        name: "All India Political Party Meet (AIPPM)", 
        desc: "Cross-party consensus building, coalition politics and national interest. Experience the dynamics of multi-party democracy and coalition governance.", 
        agenda: "Building Consensus on National Security and Internal Threats", 
        strength: "40-50 delegates", 
        ebMembers: [
            { name: "To Be Announced", role: "Chairperson" },
            { name: "To Be Announced", role: "Vice-Chairperson" },
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Executive Board Member" }
        ] 
    },
    { 
        id: 7, 
        name: "Indian Press", 
        desc: "Reporting simulations, press briefings, and journalistic accountability. Experience the Fourth Estate and its crucial role in democracy.", 
        agenda: "Media Ethics and Responsible Reporting in Digital Age", 
        strength: "20-30 delegates", 
        ebMembers: [
            { name: "To Be Announced", role: "Chairperson" },
            { name: "To Be Announced", role: "Vice-Chairperson" },
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Executive Board Member" }
        ] 
    },
    { 
        id: 8, 
        name: "All India Stakeholders Meet (AISM)", 
        desc: "Student-led policy dialogue on education, youth welfare and civic issues. A special committee for school students to engage with policy making.", 
        agenda: "National Education Policy 2020: Implementation Challenges", 
        strength: "50-60 delegates", 
        ebMembers: [
            { name: "To Be Announced", role: "Chairperson" },
            { name: "To Be Announced", role: "Vice-Chairperson" },
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Executive Board Member" }
        ], 
        isSchool: true 
    },
    { 
        id: 9, 
        name: "NITI Aayog", 
        desc: "Policy think tank simulation focusing on sustainable development and governance reforms. Experience India's premier policy think tank. (Exclusive for Teach for India fellows)", 
        agenda: "Sustainable Development Goals and India's Progress by 2030", 
        strength: "30-40 delegates", 
        ebMembers: [
            { name: "To Be Announced", role: "Chairperson" },
            { name: "To Be Announced", role: "Vice-Chairperson" },
            { name: "To Be Announced", role: "Executive Board Member" }, 
            { name: "To Be Announced", role: "Executive Board Member" }
        ], 
        isTfi: true 
    }
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

var trustees = [
    "Dr. R.K. Anand", "Mr. V.P. Raja", "Mr. Gulam Vahanvaty", 
    "Mrs. Ana Saldhana", "Adv. Abha Singh", "Mr. Mahesh Zagade", 
    "Mr. Prasad Chandran", "Mr. Rajesh Desai", "Ms. Rekha Shahani"
];

var faculty = [
    { name: "Dr. Navashikha Duara", title: "Principal, Pravin Gandhi College of Law", icon: "chalkboard-user" },
    { name: "Mrs. Kavita Sharma", title: "Faculty Convenor, Model Youth Parliament", icon: "chalkboard-user" }
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

function getChairperson(committee) {
    for (var i = 0; i < committee.ebMembers.length; i++) {
        if (committee.ebMembers[i].role === 'Chairperson') {
            return committee.ebMembers[i].name;
        }
    }
    return 'To Be Announced';
}

function getViceChairperson(committee) {
    for (var i = 0; i < committee.ebMembers.length; i++) {
        if (committee.ebMembers[i].role === 'Vice-Chairperson') {
            return committee.ebMembers[i].name;
        }
    }
    return 'To Be Announced';
}

function getOtherEBMembers(committee) {
    var others = [];
    for (var i = 0; i < committee.ebMembers.length; i++) {
        var role = committee.ebMembers[i].role;
        if (role !== 'Chairperson' && role !== 'Vice-Chairperson') {
            others.push(committee.ebMembers[i]);
        }
    }
    return others;
}

function renderCommittees(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var html = '';
    for (var i = 0; i < committees.length; i++) {
        var c = committees[i];
        var badgeHtml = '';
        if (c.isTfi) {
            badgeHtml = ' <span style="font-size:0.6rem; background:#B8860B20; padding:0.2rem 0.5rem; border-radius:50px;">Teach for India</span>';
        } else if (c.isSchool) {
            badgeHtml = ' <span style="font-size:0.6rem; background:#8B2C2C20; padding:0.2rem 0.5rem; border-radius:50px;">School Committee</span>';
        }
        
        var chair = getChairperson(c);
        var viceChair = getViceChairperson(c);
        
        html += '<div class="committee-card">';
        html += '<div class="card-img"><i class="fas fa-gavel"></i></div>';
        html += '<div class="card-content">';
        html += '<h3 class="card-title">' + c.name + badgeHtml + '</h3>';
        html += '<p class="card-desc">' + c.desc.substring(0, 80) + '...</p>';
        html += '<div class="committee-info">';
        html += '<div class="info-row"><span class="info-label">Agenda:</span><span class="info-value">' + c.agenda + '</span></div>';
        html += '<div class="info-row"><span class="info-label">Chair:</span><span class="info-value">' + chair + '</span></div>';
        html += '<div class="info-row"><span class="info-label">Vice-Chair:</span><span class="info-value">' + viceChair + '</span></div>';
        html += '</div>';
        html += '<div class="card-footer">';
        html += '<a href="committee-detail.html?id=' + c.id + '" class="btn-detail">View Details →</a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderChiefGuests(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var html = '';
    for (var i = 0; i < chiefGuests.length; i++) {
        var g = chiefGuests[i];
        html += '<div class="guest-card">';
        html += '<div class="guest-img"><i class="fas fa-' + g.icon + '"></i></div>';
        html += '<div class="guest-content">';
        html += '<h3 class="guest-name">' + g.name + '</h3>';
        html += '<p class="guest-title">' + g.title + '</p>';
        html += '</div>';
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderChairmans(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var html = '';
    for (var i = 0; i < chairmans.length; i++) {
        var c = chairmans[i];
        html += '<div class="team-card">';
        html += '<div class="team-img"><i class="fas fa-' + c.icon + '"></i></div>';
        html += '<h3 style="font-weight: bold;">' + c.name + '</h3>';
        html += '<p style="color: #B8860B; font-size: 0.8rem;">' + c.title + '</p>';
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderTrustees(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var html = '';
    for (var i = 0; i < trustees.length; i++) {
        var t = trustees[i];
        html += '<div class="team-card">';
        html += '<p><strong>' + t + '</strong></p>';
        html += '<p style="color: #B8860B; font-size: 0.75rem;">Trustee</p>';
        html += '</div>';
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
        html += '<div class="team-img"><i class="fas fa-' + f.icon + '"></i></div>';
        html += '<h3 style="font-weight: bold;">' + f.name + '</h3>';
        html += '<p>' + f.title + '</p>';
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderStudents(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var html = '';
    for (var i = 0; i < students.length; i++) {
        var s = students[i];
        html += '<div class="team-card">';
        html += '<div class="team-img"><i class="fas fa-' + s.icon + '"></i></div>';
        html += '<h3 style="font-weight: bold;">' + s.name + '</h3>';
        html += '<p style="color: #B8860B;">' + s.role + '</p>';
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderGallery(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var html = '';
    for (var i = 0; i < galleryItems.length; i++) {
        var item = galleryItems[i];
        html += '<div class="gallery-card">';
        html += '<div class="gallery-img">';
        html += '<i class="fas ' + item.icon + '" style="font-size: 3rem;"></i>';
        html += '</div>';
        html += '<div class="gallery-caption">';
        html += '<p style="font-weight: 600; margin-bottom: 0.25rem;">' + item.title + '</p>';
        html += '<p style="font-size: 0.8rem; color: #6b5a4a;">' + item.desc + '</p>';
        html += '</div>';
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderContacts(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var html = '';
    for (var i = 0; i < contacts.length; i++) {
        var c = contacts[i];
        html += '<div class="contact-card">';
        html += '<div class="contact-icon"><i class="fas ' + c.icon + '"></i></div>';
        html += '<h4 class="contact-name">' + c.name + '</h4>';
        html += '<p class="contact-role">' + c.role + '</p>';
        html += '<p class="contact-phone"><i class="fas fa-phone-alt" style="font-size: 0.7rem;"></i> ' + c.phone + '</p>';
        html += '</div>';
    }
    container.innerHTML = html;
}

function renderContactInfo(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var html = '';
    html += '<div style="display: grid; gap: 1rem;">';
    html += '<div style="display: flex; align-items: center; gap: 1rem; justify-content: center;">';
    html += '<i class="fas fa-envelope" style="font-size: 1.5rem; color: #8B2C2C;"></i>';
    html += '<a href="mailto:publicconcern@gmail.com" style="color: #2c1810; text-decoration: none;">publicconcern@gmail.com</a>';
    html += '</div>';
    html += '<div style="display: flex; align-items: center; gap: 1rem; justify-content: center;">';
    html += '<i class="fab fa-instagram" style="font-size: 1.5rem; color: #8B2C2C;"></i>';
    html += '<a href="#" style="color: #2c1810; text-decoration: none;">@pcgtmy.p</a>';
    html += '</div>';
    html += '<div style="display: flex; align-items: center; gap: 1rem; justify-content: center;">';
    html += '<i class="fas fa-globe" style="font-size: 1.5rem; color: #8B2C2C;"></i>';
    html += '<a href="#" style="color: #2c1810; text-decoration: none;">www.pcgt.org</a>';
    html += '</div>';
    html += '<div style="display: flex; align-items: flex-start; gap: 1rem; justify-content: center; margin-top: 1rem;">';
    html += '<i class="fas fa-map-marker-alt" style="font-size: 1.5rem; color: #8B2C2C;"></i>';
    html += '<span style="color: #2c1810; max-width: 400px;">B/2, Mahalaxmi Chambers, 22, Bhulabhai Desai Road, MUMBAI – 400026</span>';
    html += '</div>';
    html += '</div>';
    container.innerHTML = html;
}

function renderCommitteeDetail() {
    var urlParams = new URLSearchParams(window.location.search);
    var committeeId = parseInt(urlParams.get('id')) || 1;
    var committee = null;
    for (var i = 0; i < committees.length; i++) {
        if (committees[i].id === committeeId) {
            committee = committees[i];
            break;
        }
    }
    if (!committee) committee = committees[0];
    
    document.getElementById('detailName').textContent = committee.name;
    document.getElementById('breadcrumbName').textContent = committee.name;
    document.getElementById('detailDesc').textContent = committee.desc;
    document.getElementById('detailAgenda').textContent = committee.agenda;
    document.getElementById('detailStrength').textContent = committee.strength;
    
    var ebContainer = document.getElementById('ebMembersGrid');
    if (ebContainer) {
        var html = '';
        for (var i = 0; i < committee.ebMembers.length; i++) {
            var m = committee.ebMembers[i];
            var icon = 'user';
            if (m.role === 'Chairperson') icon = 'user-tie';
            else if (m.role === 'Vice-Chairperson') icon = 'user-tie';
            html += '<div class="team-card">';
            html += '<div class="team-img"><i class="fas fa-' + icon + '"></i></div>';
            html += '<h4 style="font-weight: bold;">' + m.name + '</h4>';
            html += '<p style="color: #B8860B; font-size: 0.8rem;">' + m.role + '</p>';
            html += '</div>';
        }
        ebContainer.innerHTML = html;
    }
}
