// مصفوفة البيانات (Array of Objects)
let people = [
    { name: "Ada Lovelace", age: 36, city: "London" },
    { name: "Alan Turing", age: 41, city: "London" },
    { name: "Grace Hopper", age: 85, city: "New York" },
    { name: "Linus Torvalds", age: 54, city: "Helsinki" },
    { name: "Margaret Hamilton", age: 87, city: "Boston" }
];

// دالة لبناء وتأطير الجدول ديناميكياً
function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = ''; // مسح المحتوى القديم

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.city}</td>
        `;
        tbody.appendChild(row);
    });
}

// 1. Live Search (البحث اللحظي أثناء الكتابة)
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredData = people.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.city.toLowerCase().includes(query)
    );
    renderTable(filteredData);
});

// 2. Sort by Name (الترتيب بالاسم أبدياً)
document.getElementById('sortNameBtn').addEventListener('click', function() {
    people.sort((a, b) => a.name.localeCompare(b.name));
    renderTable(people);
});

// 3. Sort by Age (الترتيب بالعمر تصاعدياً)
document.getElementById('sortAgeBtn').addEventListener('click', function() {
    people.sort((a, b) => a.age - b.age);
    renderTable(people);
});

// تشغيل عرض الجدول لأول مرة عند فتح الصفحة
renderTable(people);