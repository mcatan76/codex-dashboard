const users = [
  ['Alice Larson', 'alice@acme.com', 'AL', 'Admin', 'Active', 'Jun 20, 2026'],
  ['Ben Kim', 'ben@acme.com', 'BK', 'Member', 'Active', 'Jun 18, 2026'],
  ['Clara Howe', 'clara@acme.com', 'CH', 'Viewer', 'Invited', 'Jun 15, 2026'],
  ['Dan Miller', 'dan@acme.com', 'DM', 'Admin', 'Active', 'Jun 14, 2026'],
  ['Eva Nguyen', 'eva@acme.com', 'EN', 'Member', 'Suspended', 'Jun 10, 2026'],
  ['Frank Soto', 'frank@acme.com', 'FS', 'Viewer', 'Active', 'Jun 8, 2026'],
  ['Grace Wu', 'grace@acme.com', 'GW', 'Member', 'Invited', 'Jun 5, 2026'],
  ['Henry Lee', 'henry@acme.com', 'HL', 'Admin', 'Active', 'Jun 3, 2026']
];
const rows = document.querySelector('#user-rows');
const search = document.querySelector('#search');
const role = document.querySelector('#role-filter');
const status = document.querySelector('#status-filter');
function render() {
  const query = search.value.trim().toLowerCase();
  const filtered = users.filter(u => (!query || u[0].toLowerCase().includes(query) || u[1].toLowerCase().includes(query)) && (!role.value || u[3] === role.value) && (!status.value || u[4] === status.value));
  rows.innerHTML = filtered.map(([name, email, initials, userRole, userStatus, lastActive]) => `<tr><td><div class="user"><span class="avatar">${initials}</span><span><span class="name">${name}</span><span class="email">${email}</span></span></div></td><td>${userRole}</td><td><span class="status ${userStatus.toLowerCase()}">${userStatus}</span></td><td>${lastActive}</td><td><button class="menu" aria-label="Actions for ${name}"><img src="assets/icon-07.svg" alt="" /></button></td></tr>`).join('') || '<tr><td colspan="5" class="empty">No users match these filters.</td></tr>';
  document.querySelector('#summary').textContent = filtered.length === users.length ? '1-8 of 24 users' : `${filtered.length} matching user${filtered.length === 1 ? '' : 's'}`;
}
[search, role, status].forEach(control => control.addEventListener('input', render));
document.querySelector('#add-user').addEventListener('click', () => alert('Add User action'));
document.querySelector('#previous').disabled = true; document.querySelector('#next').disabled = true;
render();
