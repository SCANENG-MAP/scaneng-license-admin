"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// <define:PANEL_ASSETS>
var define_PANEL_ASSETS_default;
var init_define_PANEL_ASSETS = __esm({
  "<define:PANEL_ASSETS>"() {
    define_PANEL_ASSETS_default = { html: '<!doctype html>\n<html lang="ru">\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0438 \xB7 SCANENG MAP</title>\n<link rel="stylesheet" href="/scaneng-license-admin/panel.css">\n<script defer src="/scaneng-license-admin/panel.js"></script>\n<header><strong class="brand">SCANENG MAP</strong><span id="operator"></span><button id="logout" class="quiet">\u0412\u044B\u0439\u0442\u0438</button></header>\n<main>\n  <h1>\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0438</h1>\n  <nav aria-label="\u0420\u0430\u0437\u0434\u0435\u043B\u044B"><button data-view="users" aria-current="page">\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438</button><button data-view="groups">\u0413\u0440\u0443\u043F\u043F\u044B</button><button data-view="history">\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u044B\u0434\u0430\u0447</button></nav>\n  <p id="feedback" role="status" aria-live="polite"></p>\n  <section id="users">\n    <h2>\u041D\u0430\u0439\u0442\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F</h2>\n    <form id="lookup"><label>Email \u0432 SCANENG MAP<input type="email" name="email" required autocomplete="off"></label><button>\u041D\u0430\u0439\u0442\u0438</button></form>\n    <ul id="found"></ul>\n  </section>\n  <section id="groups" hidden>\n    <h2>\u0413\u0440\u0443\u043F\u043F\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439</h2>\n    <div class="group-controls">\n      <label>\u0413\u0440\u0443\u043F\u043F\u0430<select id="group"></select></label>\n      <form id="new-group"><label>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u044B<input name="name" maxlength="100" required></label><button>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443</button></form>\n    </div>\n    <div id="group-content" hidden>\n      <div class="heading"><h3 id="members-title"></h3><button id="assign-group">\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0435</button></div>\n      <p id="group-policy"></p>\n      <ul id="members"></ul>\n      <form id="member-lookup"><label>Email \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430<input type="email" name="email" required autocomplete="off"></label><button>\u041D\u0430\u0439\u0442\u0438</button></form>\n      <ul id="member-found"></ul>\n    </div>\n  </section>\n  <section id="history" hidden><h2>\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u044B\u0434\u0430\u0447</h2><ul id="jobs"></ul></section>\n  <dialog id="assign">\n    <h2>\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438</h2>\n    <p id="target"></p>\n    <div id="terms">\n      <label for="term">\u0421\u0440\u043E\u043A</label><select id="term"><option value="trial">14 \u0434\u043D\u0435\u0439 \u0441 \u043F\u0435\u0440\u0432\u043E\u0439 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438</option><option value="days">\u0414\u043E\u0441\u0442\u0443\u043F \u043D\u0430 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u043D\u0435\u0439</option></select>\n      <label id="days-wrap" hidden>\u0427\u0438\u0441\u043B\u043E \u0434\u043D\u0435\u0439<input id="days" type="number" min="1" step="1" value="60"></label>\n    </div>\n    <p id="confirmed-term"></p>\n    <ul id="preview-members"></ul>\n    <p id="detail-feedback" role="status" aria-live="polite"></p>\n    <footer><button id="close" class="secondary">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button><button id="primary">\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u0435\u0439</button></footer>\n  </dialog>\n</main>\n</html>\n', css: ':root { color-scheme: light; font: 16px/1.5 Inter, "Segoe UI", sans-serif; color: #172a36; background: #f5f7f8; }\n* { box-sizing: border-box; }\nbody { margin: 0; }\n[hidden] { display: none !important; }\nheader { min-height: 64px; padding: 12px max(24px, calc((100vw - 1000px)/2)); display: flex; align-items: center; gap: 16px; background: #16323b; color: white; }\n.brand { margin-right: auto; letter-spacing: .06em; white-space: nowrap; }\nmain { width: min(100% - 40px, 1000px); margin: 40px auto; }\nh1 { font-size: clamp(2rem, 5vw, 3.1rem); line-height: 1.1; letter-spacing: -.04em; margin: 0 0 24px; }\nh2 { font-size: 1.35rem; margin: 0 0 18px; } h3 { margin: 0; }\np { overflow-wrap: anywhere; }\nnav { display: flex; gap: 4px; border-bottom: 1px solid #c6d3d7; flex-wrap: wrap; }\nbutton, .action { border: 1px solid transparent; border-radius: 6px; background: #126a66; color: #fff; font: inherit; font-weight: 600; padding: 8px 15px; cursor: pointer; }\nbutton:hover, .action:hover { filter: brightness(.91); }\nbutton:disabled { opacity: .48; cursor: default; }\nbody[aria-busy=true] { cursor: progress; }\nbody[aria-busy=true] button { pointer-events: none; }\nbutton:focus-visible, input:focus-visible, select:focus-visible, a:focus-visible { outline: 3px solid #389eab; outline-offset: 2px; }\nnav button { background: transparent; color: #435866; border-bottom: 3px solid transparent; border-radius: 4px 4px 0 0; }\nnav button[aria-current=page] { color: #075b58; border-bottom-color: #126a66; }\n.quiet, .secondary { background: transparent; color: inherit; border-color: #a7babe; }\nsection, dialog { background: white; border: 1px solid #d7e0e2; border-radius: 10px; padding: clamp(16px, 3.3vw, 30px); }\nform,.heading,.group-controls,footer { display: flex; flex-wrap: wrap; align-items: flex-end; gap: 12px; }\n.heading { justify-content: space-between; align-items: center; margin-top: 22px; }\nlabel { display: grid; gap: 5px; font-size: .9rem; font-weight: 600; }\ninput,select { min-width: 0; width: min(100%, 320px); padding: 8px 10px; border: 1px solid #9dafb6; border-radius: 5px; font: inherit; background: white; color: inherit; }\ninput[type=email] { width: min(66vw, 320px); }\nul { list-style: none; padding: 0; margin: 12px 0; }\nli { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; border-bottom: 1px solid #e1e7e9; padding: 12px 0; }\nli > span { flex: 1; min-width: 12em; overflow-wrap: anywhere; }\nsmall { display: block; font-weight: 400; color: #536670; }\n#feedback:empty { margin: 18px 0; } #feedback, #detail-feedback { color: #804526; }\ndialog { color: inherit; width: min(580px, 94vw); max-height: 88vh; box-shadow: 0 18px 65px #172a3633; }\ndialog::backdrop { background: #14283170; }\nfooter { justify-content: flex-end; } #terms label { margin: 10px 0; }\n.login { max-width: 620px; margin: 12vh auto; }\n.action { display: inline-block; text-decoration: none; }\n', js: "'use strict';\n\nconst root = '/scaneng-license-admin/';\nconst el = id => document.getElementById(id);\nlet csrf = '', groups = [], jobs = [], target = null, job = null, busy = false;\n\nasync function api(action, data = {}) {\n  const response = await fetch(root + 'api/' + action, { method: 'POST',\n    headers: { 'Content-Type': 'application/json', 'X-Scaneng-CSRF': csrf }, body: JSON.stringify(data) });\n  const body = await response.json();\n  if (!response.ok) {\n    if (response.status === 401) window.location.assign(root + 'login');\n    throw new Error(body.error || '\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D.');\n  }\n  return body;\n}\n\nfunction run(handler) {\n  return async event => {\n    event?.preventDefault();\n    if (busy) return;\n    busy = true;\n    document.body.setAttribute('aria-busy', 'true');\n    el('feedback').textContent = el('detail-feedback').textContent = '';\n    try { await handler(event); }\n    catch (error) { el(el('assign').open ? 'detail-feedback' : 'feedback').textContent = error.message; }\n    finally { busy = false; document.body.removeAttribute('aria-busy'); }\n  };\n}\n\nfunction row(list, title, detail, action, handler) {\n  const line = document.createElement('li'), text = document.createElement('span'), hint = document.createElement('small');\n  text.append(document.createTextNode(title));\n  hint.textContent = detail;\n  text.append(hint);\n  line.append(text);\n  if (action) {\n    const button = document.createElement('button');\n    button.textContent = action;\n    button.className = 'secondary';\n    button.onclick = run(handler);\n    line.append(button);\n  }\n  list.append(line);\n}\n\nfunction currentGroup() { return groups.find(group => group.id === el('group').value); }\nfunction renderGroup() {\n  const group = currentGroup();\n  el('group-content').hidden = !group;\n  el('members').replaceChildren();\n  el('member-found').replaceChildren();\n  if (!group) return;\n  el('members-title').textContent = '\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \xB7 ' + group.members.length;\n  el('group-policy').textContent = !group.policy ? '\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0433\u0440\u0443\u043F\u043F\u0435 \u0435\u0449\u0451 \u043D\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430.' :\n    '\u0421\u0440\u043E\u043A \u0434\u043B\u044F \u0442\u0435\u043A\u0443\u0449\u0438\u0445 \u0438 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u2014 ' + termText(group.policy.expiresAt);\n  for (const member of group.members) {\n    row(el('members'), member.email, member.subject, '\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u0433\u0440\u0443\u043F\u043F\u044B', async () => {\n      await api('membership', { group: group.id, subject: member.subject, change: 'remove' });\n      await refresh(group.id);\n    });\n  }\n}\n\nasync function refresh(groupId = el('group').value) {\n  ({ groups, jobs } = await api('state'));\n  el('group').replaceChildren(...groups.map(group => new Option(group.name, group.id)));\n  if (groups.some(group => group.id === groupId)) el('group').value = groupId;\n  renderGroup();\n  el('jobs').replaceChildren();\n  if (!jobs.length) row(el('jobs'), '\u0412\u044B\u0434\u0430\u0447 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442', '');\n  for (const item of jobs) {\n    const done = item.members.filter(member => ['issued', 'skipped'].includes(member.result)).length;\n    row(el('jobs'), item.label, '\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E ' + done + ' \u0438\u0437 ' + item.members.length, '\u041E\u0442\u043A\u0440\u044B\u0442\u044C', () => {\n      showTarget(null, item.label);\n      showJob(item);\n    });\n  }\n}\n\nfunction showTarget(selection, label) {\n  target = selection;\n  job = null;\n  el('target').textContent = label;\n  el('terms').hidden = false;\n  el('term').value = 'trial';\n  el('days-wrap').hidden = true;\n  el('confirmed-term').textContent = el('detail-feedback').textContent = '';\n  el('preview-members').replaceChildren();\n  el('primary').textContent = '\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u0435\u0439';\n  el('primary').disabled = false;\n  el('assign').showModal();\n}\n\nfunction termText(end) {\n  return end ? '\u0434\u043E ' + new Date(end * 1000).toLocaleString('ru-RU') : '14 \u0434\u043D\u0435\u0439 \u0441 \u043F\u0435\u0440\u0432\u043E\u0439 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430';\n}\n\nfunction showJob(item) {\n  job = item;\n  el('terms').hidden = true;\n  el('confirmed-term').textContent = item.kind === 'leave' ? '\u0421\u043D\u044F\u0442\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u044D\u0442\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u044B' :\n    (item.groupId ? '\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0442\u0435\u043A\u0443\u0449\u0438\u0445 \u0438 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432. ' : '') +\n    (item.expiresAt ? '\u0414\u043E\u0441\u0442\u0443\u043F ' + termText(item.expiresAt) + '.' : '\u041F\u0440\u043E\u0431\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043D\u0430 14 \u0434\u043D\u0435\u0439 \u0441 \u043F\u0435\u0440\u0432\u043E\u0439 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438.');\n  const list = el('preview-members');\n  list.replaceChildren();\n  for (const member of item.members) {\n    row(list, member.email, member.subject + (member.note ? ' \xB7 ' + member.note : ''));\n  }\n  const pending = item.members.filter(member => ['pending', 'processing'].includes(member.result)).length;\n  el('primary').disabled = Boolean(item.confirmed) && !pending;\n  el('primary').textContent = !item.confirmed ? (pending ? '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u044B\u0434\u0430\u0447\u0443 (' + pending + ')' : '\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0431\u0443\u0434\u0443\u0449\u0438\u043C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C') :\n    pending ? '\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C' : '\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E';\n}\n\nel('primary').onclick = run(async () => {\n  if (!job) {\n    const days = el('term').value === 'trial' ? null : el('days').valueAsNumber;\n    if (days !== null && (!Number.isSafeInteger(days) || days < 1)) throw new Error('\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043B\u043E\u0435 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u043D\u0435\u0439.');\n    showJob(await api('preview', { ...target, days }));\n    return;\n  }\n  if (!job.confirmed) showJob(await api('confirm', { job: job.id }));\n  el('close').disabled = true;\n  const errors = [];\n  try {\n    for (const member of job.members.filter(item => ['pending', 'processing'].includes(item.result))) {\n      try { showJob(await api('issue', { job: job.id, subject: member.subject })); }\n      catch (error) { errors.push(member.email + ' \u2014 ' + error.message); }\n    }\n    await refresh();\n    el('detail-feedback').textContent = errors.join(' ');\n  } finally { el('close').disabled = false; }\n});\nel('close').onclick = () => { if (!busy) el('assign').close(); };\nel('assign').oncancel = event => { if (busy) event.preventDefault(); };\nel('term').onchange = () => { el('days-wrap').hidden = el('term').value !== 'days'; };\nel('group').onchange = renderGroup;\nel('new-group').onsubmit = run(async event => {\n  const form = event.target;\n  const group = await api('group', { name: new FormData(form).get('name') });\n  form.reset();\n  await refresh(group.id);\n});\nel('assign-group').onclick = run(() => {\n  const group = currentGroup();\n  showTarget({ group: group.id }, group.name);\n});\n\nfunction lookup(form, list, forGroup) {\n  form.onsubmit = run(async () => {\n    list.replaceChildren();\n    const { users } = await api('search', { email: new FormData(form).get('email') });\n    const groupId = el('group').value;\n    if (!users.length) row(list, '\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0441 \u0442\u0430\u043A\u0438\u043C email \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D', '');\n    for (const user of users) {\n      row(list, user.email, user.subject + ' \xB7 ' + user.status, forGroup ? '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0433\u0440\u0443\u043F\u043F\u0443' : '\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044E', async () => {\n        if (!forGroup) return showTarget({ subject: user.subject }, user.email);\n        await api('membership', { group: groupId, subject: user.subject, change: 'add' });\n        form.reset();\n        await refresh(groupId);\n      });\n    }\n  });\n}\nlookup(el('lookup'), el('found'), false);\nlookup(el('member-lookup'), el('member-found'), true);\ndocument.querySelectorAll('nav button').forEach(button => {\n  button.onclick = run(async () => {\n    for (const item of document.querySelectorAll('nav button')) {\n      const selected = item === button;\n      el(item.dataset.view).hidden = !selected;\n      if (selected) item.setAttribute('aria-current', 'page');\n      else item.removeAttribute('aria-current');\n    }\n    await refresh();\n  });\n});\nel('logout').onclick = run(async () => { await api('logout'); window.location.assign(root); });\nrun(async () => {\n  const response = await fetch(root + 'api/session');\n  if (!response.ok) return window.location.assign(root + 'login');\n  const session = await response.json();\n  csrf = session.csrf;\n  el('operator').textContent = session.title;\n  await refresh();\n})();\n", login: '<!doctype html>\n<html lang="ru">\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>\u0412\u0445\u043E\u0434 \xB7 \u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0438 SCANENG MAP</title>\n<link rel="stylesheet" href="/scaneng-license-admin/panel.css">\n<header><strong class="brand">SCANENG MAP</strong></header>\n<main class="login"><h1>\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0438</h1><p>\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0441 \u0443\u0447\u0451\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u044C\u044E \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 Auth0, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0437\u043D\u0430\u0447\u0430\u0442\u044C \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0438 \u0433\u0440\u0443\u043F\u043F\u0430\u043C.</p><a class="action" href="/scaneng-license-admin/login">\u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Auth0</a></main>\n</html>\n', manifest: { title: "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u0438 SCANENG MAP", name: "scaneng-license-admin", version: "1.0.0", author: "SCANENG MAP", repository: "https://github.com/SCANENG-MAP/scaneng-license-admin", keywords: ["auth0", "extension", "licensing"], runtime: "node22", description: "\u0412\u044B\u0434\u0430\u0447\u0430 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0439 \u043F\u043B\u0430\u0433\u0438\u043D\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u0438 \u0433\u0440\u0443\u043F\u043F\u0430\u043C.", type: "application", useHashName: false, initialUrlPath: "/", auth0: { createClient: false }, secrets: { PANEL_SECRET: { description: "\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439 \u0441\u0435\u043A\u0440\u0435\u0442 \u0441\u0435\u0430\u043D\u0441\u0430 \u043F\u0430\u043D\u0435\u043B\u0438, \u043C\u0438\u043D\u0438\u043C\u0443\u043C 32 \u0431\u0430\u0439\u0442\u0430. \u0425\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F.", required: true } } } };
  }
});

// node_modules/jose/dist/node/cjs/runtime/digest.js
var require_digest = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/digest.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var node_crypto_1 = require("node:crypto");
    var digest = (algorithm, data) => (0, node_crypto_1.createHash)(algorithm).update(data).digest();
    exports2.default = digest;
  }
});

// node_modules/jose/dist/node/cjs/lib/buffer_utils.js
var require_buffer_utils = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/buffer_utils.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decoder = exports2.encoder = void 0;
    exports2.concat = concat;
    exports2.p2s = p2s;
    exports2.uint64be = uint64be;
    exports2.uint32be = uint32be;
    exports2.lengthAndInput = lengthAndInput;
    exports2.concatKdf = concatKdf;
    var digest_js_1 = require_digest();
    exports2.encoder = new TextEncoder();
    exports2.decoder = new TextDecoder();
    var MAX_INT32 = 2 ** 32;
    function concat(...buffers) {
      const size = buffers.reduce((acc, { length }) => acc + length, 0);
      const buf = new Uint8Array(size);
      let i = 0;
      for (const buffer of buffers) {
        buf.set(buffer, i);
        i += buffer.length;
      }
      return buf;
    }
    function p2s(alg, p2sInput) {
      return concat(exports2.encoder.encode(alg), new Uint8Array([0]), p2sInput);
    }
    function writeUInt32BE(buf, value, offset) {
      if (value < 0 || value >= MAX_INT32) {
        throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
      }
      buf.set([value >>> 24, value >>> 16, value >>> 8, value & 255], offset);
    }
    function uint64be(value) {
      const high = Math.floor(value / MAX_INT32);
      const low = value % MAX_INT32;
      const buf = new Uint8Array(8);
      writeUInt32BE(buf, high, 0);
      writeUInt32BE(buf, low, 4);
      return buf;
    }
    function uint32be(value) {
      const buf = new Uint8Array(4);
      writeUInt32BE(buf, value);
      return buf;
    }
    function lengthAndInput(input) {
      return concat(uint32be(input.length), input);
    }
    async function concatKdf(secret, bits, value) {
      const iterations = Math.ceil((bits >> 3) / 32);
      const res = new Uint8Array(iterations * 32);
      for (let iter = 0; iter < iterations; iter++) {
        const buf = new Uint8Array(4 + secret.length + value.length);
        buf.set(uint32be(iter + 1));
        buf.set(secret, 4);
        buf.set(value, 4 + secret.length);
        res.set(await (0, digest_js_1.default)("sha256", buf), iter * 32);
      }
      return res.slice(0, bits >> 3);
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/base64url.js
var require_base64url = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/base64url.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decode = exports2.encode = exports2.encodeBase64 = exports2.decodeBase64 = void 0;
    var node_buffer_1 = require("node:buffer");
    var buffer_utils_js_1 = require_buffer_utils();
    function normalize(input) {
      let encoded = input;
      if (encoded instanceof Uint8Array) {
        encoded = buffer_utils_js_1.decoder.decode(encoded);
      }
      return encoded;
    }
    var encode = (input) => node_buffer_1.Buffer.from(input).toString("base64url");
    exports2.encode = encode;
    var decodeBase64 = (input) => new Uint8Array(node_buffer_1.Buffer.from(input, "base64"));
    exports2.decodeBase64 = decodeBase64;
    var encodeBase64 = (input) => node_buffer_1.Buffer.from(input).toString("base64");
    exports2.encodeBase64 = encodeBase64;
    var decode = (input) => new Uint8Array(node_buffer_1.Buffer.from(normalize(input), "base64url"));
    exports2.decode = decode;
  }
});

// node_modules/jose/dist/node/cjs/util/errors.js
var require_errors = __commonJS({
  "node_modules/jose/dist/node/cjs/util/errors.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.JWSSignatureVerificationFailed = exports2.JWKSTimeout = exports2.JWKSMultipleMatchingKeys = exports2.JWKSNoMatchingKey = exports2.JWKSInvalid = exports2.JWKInvalid = exports2.JWTInvalid = exports2.JWSInvalid = exports2.JWEInvalid = exports2.JWEDecryptionFailed = exports2.JOSENotSupported = exports2.JOSEAlgNotAllowed = exports2.JWTExpired = exports2.JWTClaimValidationFailed = exports2.JOSEError = void 0;
    var JOSEError = class extends Error {
      static code = "ERR_JOSE_GENERIC";
      code = "ERR_JOSE_GENERIC";
      constructor(message, options) {
        var _a;
        super(message, options);
        this.name = this.constructor.name;
        (_a = Error.captureStackTrace) == null ? void 0 : _a.call(Error, this, this.constructor);
      }
    };
    exports2.JOSEError = JOSEError;
    var JWTClaimValidationFailed = class extends JOSEError {
      static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
      code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
      claim;
      reason;
      payload;
      constructor(message, payload, claim = "unspecified", reason = "unspecified") {
        super(message, { cause: { claim, reason, payload } });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
      }
    };
    exports2.JWTClaimValidationFailed = JWTClaimValidationFailed;
    var JWTExpired = class extends JOSEError {
      static code = "ERR_JWT_EXPIRED";
      code = "ERR_JWT_EXPIRED";
      claim;
      reason;
      payload;
      constructor(message, payload, claim = "unspecified", reason = "unspecified") {
        super(message, { cause: { claim, reason, payload } });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
      }
    };
    exports2.JWTExpired = JWTExpired;
    var JOSEAlgNotAllowed = class extends JOSEError {
      static code = "ERR_JOSE_ALG_NOT_ALLOWED";
      code = "ERR_JOSE_ALG_NOT_ALLOWED";
    };
    exports2.JOSEAlgNotAllowed = JOSEAlgNotAllowed;
    var JOSENotSupported = class extends JOSEError {
      static code = "ERR_JOSE_NOT_SUPPORTED";
      code = "ERR_JOSE_NOT_SUPPORTED";
    };
    exports2.JOSENotSupported = JOSENotSupported;
    var JWEDecryptionFailed = class extends JOSEError {
      static code = "ERR_JWE_DECRYPTION_FAILED";
      code = "ERR_JWE_DECRYPTION_FAILED";
      constructor(message = "decryption operation failed", options) {
        super(message, options);
      }
    };
    exports2.JWEDecryptionFailed = JWEDecryptionFailed;
    var JWEInvalid = class extends JOSEError {
      static code = "ERR_JWE_INVALID";
      code = "ERR_JWE_INVALID";
    };
    exports2.JWEInvalid = JWEInvalid;
    var JWSInvalid = class extends JOSEError {
      static code = "ERR_JWS_INVALID";
      code = "ERR_JWS_INVALID";
    };
    exports2.JWSInvalid = JWSInvalid;
    var JWTInvalid = class extends JOSEError {
      static code = "ERR_JWT_INVALID";
      code = "ERR_JWT_INVALID";
    };
    exports2.JWTInvalid = JWTInvalid;
    var JWKInvalid = class extends JOSEError {
      static code = "ERR_JWK_INVALID";
      code = "ERR_JWK_INVALID";
    };
    exports2.JWKInvalid = JWKInvalid;
    var JWKSInvalid = class extends JOSEError {
      static code = "ERR_JWKS_INVALID";
      code = "ERR_JWKS_INVALID";
    };
    exports2.JWKSInvalid = JWKSInvalid;
    var JWKSNoMatchingKey = class extends JOSEError {
      static code = "ERR_JWKS_NO_MATCHING_KEY";
      code = "ERR_JWKS_NO_MATCHING_KEY";
      constructor(message = "no applicable key found in the JSON Web Key Set", options) {
        super(message, options);
      }
    };
    exports2.JWKSNoMatchingKey = JWKSNoMatchingKey;
    var JWKSMultipleMatchingKeys = class extends JOSEError {
      [Symbol.asyncIterator];
      static code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
      code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
      constructor(message = "multiple matching keys found in the JSON Web Key Set", options) {
        super(message, options);
      }
    };
    exports2.JWKSMultipleMatchingKeys = JWKSMultipleMatchingKeys;
    var JWKSTimeout = class extends JOSEError {
      static code = "ERR_JWKS_TIMEOUT";
      code = "ERR_JWKS_TIMEOUT";
      constructor(message = "request timed out", options) {
        super(message, options);
      }
    };
    exports2.JWKSTimeout = JWKSTimeout;
    var JWSSignatureVerificationFailed = class extends JOSEError {
      static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
      code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
      constructor(message = "signature verification failed", options) {
        super(message, options);
      }
    };
    exports2.JWSSignatureVerificationFailed = JWSSignatureVerificationFailed;
  }
});

// node_modules/jose/dist/node/cjs/runtime/random.js
var require_random = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/random.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = void 0;
    var node_crypto_1 = require("node:crypto");
    Object.defineProperty(exports2, "default", { enumerable: true, get: function() {
      return node_crypto_1.randomFillSync;
    } });
  }
});

// node_modules/jose/dist/node/cjs/lib/iv.js
var require_iv = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/iv.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bitLength = bitLength;
    var errors_js_1 = require_errors();
    var random_js_1 = require_random();
    function bitLength(alg) {
      switch (alg) {
        case "A128GCM":
        case "A128GCMKW":
        case "A192GCM":
        case "A192GCMKW":
        case "A256GCM":
        case "A256GCMKW":
          return 96;
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          return 128;
        default:
          throw new errors_js_1.JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
      }
    }
    exports2.default = (alg) => (0, random_js_1.default)(new Uint8Array(bitLength(alg) >> 3));
  }
});

// node_modules/jose/dist/node/cjs/lib/check_iv_length.js
var require_check_iv_length = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/check_iv_length.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var errors_js_1 = require_errors();
    var iv_js_1 = require_iv();
    var checkIvLength = (enc, iv) => {
      if (iv.length << 3 !== (0, iv_js_1.bitLength)(enc)) {
        throw new errors_js_1.JWEInvalid("Invalid Initialization Vector length");
      }
    };
    exports2.default = checkIvLength;
  }
});

// node_modules/jose/dist/node/cjs/runtime/is_key_object.js
var require_is_key_object = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/is_key_object.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var util = require("node:util");
    exports2.default = (obj) => util.types.isKeyObject(obj);
  }
});

// node_modules/jose/dist/node/cjs/runtime/check_cek_length.js
var require_check_cek_length = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/check_cek_length.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var errors_js_1 = require_errors();
    var is_key_object_js_1 = require_is_key_object();
    var checkCekLength = (enc, cek) => {
      let expected;
      switch (enc) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          expected = parseInt(enc.slice(-3), 10);
          break;
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          expected = parseInt(enc.slice(1, 4), 10);
          break;
        default:
          throw new errors_js_1.JOSENotSupported(`Content Encryption Algorithm ${enc} is not supported either by JOSE or your javascript runtime`);
      }
      if (cek instanceof Uint8Array) {
        const actual = cek.byteLength << 3;
        if (actual !== expected) {
          throw new errors_js_1.JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
        }
        return;
      }
      if ((0, is_key_object_js_1.default)(cek) && cek.type === "secret") {
        const actual = cek.symmetricKeySize << 3;
        if (actual !== expected) {
          throw new errors_js_1.JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
        }
        return;
      }
      throw new TypeError("Invalid Content Encryption Key type");
    };
    exports2.default = checkCekLength;
  }
});

// node_modules/jose/dist/node/cjs/runtime/timing_safe_equal.js
var require_timing_safe_equal = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/timing_safe_equal.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var node_crypto_1 = require("node:crypto");
    var timingSafeEqual = node_crypto_1.timingSafeEqual;
    exports2.default = timingSafeEqual;
  }
});

// node_modules/jose/dist/node/cjs/runtime/cbc_tag.js
var require_cbc_tag = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/cbc_tag.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = cbcTag;
    var node_crypto_1 = require("node:crypto");
    var buffer_utils_js_1 = require_buffer_utils();
    function cbcTag(aad, iv, ciphertext, macSize, macKey, keySize) {
      const macData = (0, buffer_utils_js_1.concat)(aad, iv, ciphertext, (0, buffer_utils_js_1.uint64be)(aad.length << 3));
      const hmac = (0, node_crypto_1.createHmac)(`sha${macSize}`, macKey);
      hmac.update(macData);
      return hmac.digest().slice(0, keySize >> 3);
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/webcrypto.js
var require_webcrypto = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/webcrypto.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isCryptoKey = void 0;
    var crypto = require("node:crypto");
    var util = require("node:util");
    var webcrypto = crypto.webcrypto;
    exports2.default = webcrypto;
    var isCryptoKey = (key) => util.types.isCryptoKey(key);
    exports2.isCryptoKey = isCryptoKey;
  }
});

// node_modules/jose/dist/node/cjs/lib/crypto_key.js
var require_crypto_key = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/crypto_key.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.checkSigCryptoKey = checkSigCryptoKey;
    exports2.checkEncCryptoKey = checkEncCryptoKey;
    function unusable(name, prop = "algorithm.name") {
      return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
    }
    function isAlgorithm(algorithm, name) {
      return algorithm.name === name;
    }
    function getHashLength(hash) {
      return parseInt(hash.name.slice(4), 10);
    }
    function getNamedCurve(alg) {
      switch (alg) {
        case "ES256":
          return "P-256";
        case "ES384":
          return "P-384";
        case "ES512":
          return "P-521";
        default:
          throw new Error("unreachable");
      }
    }
    function checkUsage(key, usages) {
      if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
        let msg = "CryptoKey does not support this operation, its usages must include ";
        if (usages.length > 2) {
          const last = usages.pop();
          msg += `one of ${usages.join(", ")}, or ${last}.`;
        } else if (usages.length === 2) {
          msg += `one of ${usages[0]} or ${usages[1]}.`;
        } else {
          msg += `${usages[0]}.`;
        }
        throw new TypeError(msg);
      }
    }
    function checkSigCryptoKey(key, alg, ...usages) {
      switch (alg) {
        case "HS256":
        case "HS384":
        case "HS512": {
          if (!isAlgorithm(key.algorithm, "HMAC"))
            throw unusable("HMAC");
          const expected = parseInt(alg.slice(2), 10);
          const actual = getHashLength(key.algorithm.hash);
          if (actual !== expected)
            throw unusable(`SHA-${expected}`, "algorithm.hash");
          break;
        }
        case "RS256":
        case "RS384":
        case "RS512": {
          if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
            throw unusable("RSASSA-PKCS1-v1_5");
          const expected = parseInt(alg.slice(2), 10);
          const actual = getHashLength(key.algorithm.hash);
          if (actual !== expected)
            throw unusable(`SHA-${expected}`, "algorithm.hash");
          break;
        }
        case "PS256":
        case "PS384":
        case "PS512": {
          if (!isAlgorithm(key.algorithm, "RSA-PSS"))
            throw unusable("RSA-PSS");
          const expected = parseInt(alg.slice(2), 10);
          const actual = getHashLength(key.algorithm.hash);
          if (actual !== expected)
            throw unusable(`SHA-${expected}`, "algorithm.hash");
          break;
        }
        case "EdDSA": {
          if (key.algorithm.name !== "Ed25519" && key.algorithm.name !== "Ed448") {
            throw unusable("Ed25519 or Ed448");
          }
          break;
        }
        case "Ed25519": {
          if (!isAlgorithm(key.algorithm, "Ed25519"))
            throw unusable("Ed25519");
          break;
        }
        case "ES256":
        case "ES384":
        case "ES512": {
          if (!isAlgorithm(key.algorithm, "ECDSA"))
            throw unusable("ECDSA");
          const expected = getNamedCurve(alg);
          const actual = key.algorithm.namedCurve;
          if (actual !== expected)
            throw unusable(expected, "algorithm.namedCurve");
          break;
        }
        default:
          throw new TypeError("CryptoKey does not support this operation");
      }
      checkUsage(key, usages);
    }
    function checkEncCryptoKey(key, alg, ...usages) {
      switch (alg) {
        case "A128GCM":
        case "A192GCM":
        case "A256GCM": {
          if (!isAlgorithm(key.algorithm, "AES-GCM"))
            throw unusable("AES-GCM");
          const expected = parseInt(alg.slice(1, 4), 10);
          const actual = key.algorithm.length;
          if (actual !== expected)
            throw unusable(expected, "algorithm.length");
          break;
        }
        case "A128KW":
        case "A192KW":
        case "A256KW": {
          if (!isAlgorithm(key.algorithm, "AES-KW"))
            throw unusable("AES-KW");
          const expected = parseInt(alg.slice(1, 4), 10);
          const actual = key.algorithm.length;
          if (actual !== expected)
            throw unusable(expected, "algorithm.length");
          break;
        }
        case "ECDH": {
          switch (key.algorithm.name) {
            case "ECDH":
            case "X25519":
            case "X448":
              break;
            default:
              throw unusable("ECDH, X25519, or X448");
          }
          break;
        }
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW":
          if (!isAlgorithm(key.algorithm, "PBKDF2"))
            throw unusable("PBKDF2");
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512": {
          if (!isAlgorithm(key.algorithm, "RSA-OAEP"))
            throw unusable("RSA-OAEP");
          const expected = parseInt(alg.slice(9), 10) || 1;
          const actual = getHashLength(key.algorithm.hash);
          if (actual !== expected)
            throw unusable(`SHA-${expected}`, "algorithm.hash");
          break;
        }
        default:
          throw new TypeError("CryptoKey does not support this operation");
      }
      checkUsage(key, usages);
    }
  }
});

// node_modules/jose/dist/node/cjs/lib/invalid_key_input.js
var require_invalid_key_input = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/invalid_key_input.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.withAlg = withAlg;
    function message(msg, actual, ...types) {
      var _a;
      types = types.filter(Boolean);
      if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(", ")}, or ${last}.`;
      } else if (types.length === 2) {
        msg += `one of type ${types[0]} or ${types[1]}.`;
      } else {
        msg += `of type ${types[0]}.`;
      }
      if (actual == null) {
        msg += ` Received ${actual}`;
      } else if (typeof actual === "function" && actual.name) {
        msg += ` Received function ${actual.name}`;
      } else if (typeof actual === "object" && actual != null) {
        if ((_a = actual.constructor) == null ? void 0 : _a.name) {
          msg += ` Received an instance of ${actual.constructor.name}`;
        }
      }
      return msg;
    }
    exports2.default = (actual, ...types) => {
      return message("Key must be ", actual, ...types);
    };
    function withAlg(alg, actual, ...types) {
      return message(`Key for the ${alg} algorithm must be `, actual, ...types);
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/ciphers.js
var require_ciphers = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/ciphers.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var node_crypto_1 = require("node:crypto");
    var ciphers;
    exports2.default = (algorithm) => {
      ciphers ||= new Set((0, node_crypto_1.getCiphers)());
      return ciphers.has(algorithm);
    };
  }
});

// node_modules/jose/dist/node/cjs/runtime/is_key_like.js
var require_is_key_like = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/is_key_like.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.types = void 0;
    var webcrypto_js_1 = require_webcrypto();
    var is_key_object_js_1 = require_is_key_object();
    exports2.default = (key) => (0, is_key_object_js_1.default)(key) || (0, webcrypto_js_1.isCryptoKey)(key);
    var types = ["KeyObject"];
    exports2.types = types;
    var _a;
    if (globalThis.CryptoKey || ((_a = webcrypto_js_1.default) == null ? void 0 : _a.CryptoKey)) {
      types.push("CryptoKey");
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/decrypt.js
var require_decrypt = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/decrypt.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var node_crypto_1 = require("node:crypto");
    var check_iv_length_js_1 = require_check_iv_length();
    var check_cek_length_js_1 = require_check_cek_length();
    var buffer_utils_js_1 = require_buffer_utils();
    var errors_js_1 = require_errors();
    var timing_safe_equal_js_1 = require_timing_safe_equal();
    var cbc_tag_js_1 = require_cbc_tag();
    var webcrypto_js_1 = require_webcrypto();
    var crypto_key_js_1 = require_crypto_key();
    var is_key_object_js_1 = require_is_key_object();
    var invalid_key_input_js_1 = require_invalid_key_input();
    var ciphers_js_1 = require_ciphers();
    var is_key_like_js_1 = require_is_key_like();
    function cbcDecrypt(enc, cek, ciphertext, iv, tag, aad) {
      const keySize = parseInt(enc.slice(1, 4), 10);
      if ((0, is_key_object_js_1.default)(cek)) {
        cek = cek.export();
      }
      const encKey = cek.subarray(keySize >> 3);
      const macKey = cek.subarray(0, keySize >> 3);
      const macSize = parseInt(enc.slice(-3), 10);
      const algorithm = `aes-${keySize}-cbc`;
      if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${enc} is not supported by your javascript runtime`);
      }
      const expectedTag = (0, cbc_tag_js_1.default)(aad, iv, ciphertext, macSize, macKey, keySize);
      let macCheckPassed;
      try {
        macCheckPassed = (0, timing_safe_equal_js_1.default)(tag, expectedTag);
      } catch {
      }
      if (!macCheckPassed) {
        throw new errors_js_1.JWEDecryptionFailed();
      }
      let plaintext;
      try {
        const decipher = (0, node_crypto_1.createDecipheriv)(algorithm, encKey, iv);
        plaintext = (0, buffer_utils_js_1.concat)(decipher.update(ciphertext), decipher.final());
      } catch {
      }
      if (!plaintext) {
        throw new errors_js_1.JWEDecryptionFailed();
      }
      return plaintext;
    }
    function gcmDecrypt(enc, cek, ciphertext, iv, tag, aad) {
      const keySize = parseInt(enc.slice(1, 4), 10);
      const algorithm = `aes-${keySize}-gcm`;
      if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${enc} is not supported by your javascript runtime`);
      }
      try {
        const decipher = (0, node_crypto_1.createDecipheriv)(algorithm, cek, iv, { authTagLength: 16 });
        decipher.setAuthTag(tag);
        if (aad.byteLength) {
          decipher.setAAD(aad, { plaintextLength: ciphertext.length });
        }
        const plaintext = decipher.update(ciphertext);
        decipher.final();
        return plaintext;
      } catch {
        throw new errors_js_1.JWEDecryptionFailed();
      }
    }
    var decrypt = (enc, cek, ciphertext, iv, tag, aad) => {
      let key;
      if ((0, webcrypto_js_1.isCryptoKey)(cek)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(cek, enc, "decrypt");
        key = node_crypto_1.KeyObject.from(cek);
      } else if (cek instanceof Uint8Array || (0, is_key_object_js_1.default)(cek)) {
        key = cek;
      } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(cek, ...is_key_like_js_1.types, "Uint8Array"));
      }
      if (!iv) {
        throw new errors_js_1.JWEInvalid("JWE Initialization Vector missing");
      }
      if (!tag) {
        throw new errors_js_1.JWEInvalid("JWE Authentication Tag missing");
      }
      (0, check_cek_length_js_1.default)(enc, key);
      (0, check_iv_length_js_1.default)(enc, iv);
      switch (enc) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          return cbcDecrypt(enc, key, ciphertext, iv, tag, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          return gcmDecrypt(enc, key, ciphertext, iv, tag, aad);
        default:
          throw new errors_js_1.JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    exports2.default = decrypt;
  }
});

// node_modules/jose/dist/node/cjs/lib/is_disjoint.js
var require_is_disjoint = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/is_disjoint.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var isDisjoint = (...headers) => {
      const sources = headers.filter(Boolean);
      if (sources.length === 0 || sources.length === 1) {
        return true;
      }
      let acc;
      for (const header of sources) {
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
          acc = new Set(parameters);
          continue;
        }
        for (const parameter of parameters) {
          if (acc.has(parameter)) {
            return false;
          }
          acc.add(parameter);
        }
      }
      return true;
    };
    exports2.default = isDisjoint;
  }
});

// node_modules/jose/dist/node/cjs/lib/is_object.js
var require_is_object = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/is_object.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = isObject;
    function isObjectLike(value) {
      return typeof value === "object" && value !== null;
    }
    function isObject(input) {
      if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
        return false;
      }
      if (Object.getPrototypeOf(input) === null) {
        return true;
      }
      let proto = input;
      while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
      }
      return Object.getPrototypeOf(input) === proto;
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/aeskw.js
var require_aeskw = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/aeskw.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.unwrap = exports2.wrap = void 0;
    var node_buffer_1 = require("node:buffer");
    var node_crypto_1 = require("node:crypto");
    var errors_js_1 = require_errors();
    var buffer_utils_js_1 = require_buffer_utils();
    var webcrypto_js_1 = require_webcrypto();
    var crypto_key_js_1 = require_crypto_key();
    var is_key_object_js_1 = require_is_key_object();
    var invalid_key_input_js_1 = require_invalid_key_input();
    var ciphers_js_1 = require_ciphers();
    var is_key_like_js_1 = require_is_key_like();
    function checkKeySize(key, alg) {
      if (key.symmetricKeySize << 3 !== parseInt(alg.slice(1, 4), 10)) {
        throw new TypeError(`Invalid key size for alg: ${alg}`);
      }
    }
    function ensureKeyObject(key, alg, usage) {
      if ((0, is_key_object_js_1.default)(key)) {
        return key;
      }
      if (key instanceof Uint8Array) {
        return (0, node_crypto_1.createSecretKey)(key);
      }
      if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(key, alg, usage);
        return node_crypto_1.KeyObject.from(key);
      }
      throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types, "Uint8Array"));
    }
    var wrap = (alg, key, cek) => {
      const size = parseInt(alg.slice(1, 4), 10);
      const algorithm = `aes${size}-wrap`;
      if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
      }
      const keyObject = ensureKeyObject(key, alg, "wrapKey");
      checkKeySize(keyObject, alg);
      const cipher = (0, node_crypto_1.createCipheriv)(algorithm, keyObject, node_buffer_1.Buffer.alloc(8, 166));
      return (0, buffer_utils_js_1.concat)(cipher.update(cek), cipher.final());
    };
    exports2.wrap = wrap;
    var unwrap = (alg, key, encryptedKey) => {
      const size = parseInt(alg.slice(1, 4), 10);
      const algorithm = `aes${size}-wrap`;
      if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
      }
      const keyObject = ensureKeyObject(key, alg, "unwrapKey");
      checkKeySize(keyObject, alg);
      const cipher = (0, node_crypto_1.createDecipheriv)(algorithm, keyObject, node_buffer_1.Buffer.alloc(8, 166));
      return (0, buffer_utils_js_1.concat)(cipher.update(encryptedKey), cipher.final());
    };
    exports2.unwrap = unwrap;
  }
});

// node_modules/jose/dist/node/cjs/lib/is_jwk.js
var require_is_jwk = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/is_jwk.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isJWK = isJWK;
    exports2.isPrivateJWK = isPrivateJWK;
    exports2.isPublicJWK = isPublicJWK;
    exports2.isSecretJWK = isSecretJWK;
    var is_object_js_1 = require_is_object();
    function isJWK(key) {
      return (0, is_object_js_1.default)(key) && typeof key.kty === "string";
    }
    function isPrivateJWK(key) {
      return key.kty !== "oct" && typeof key.d === "string";
    }
    function isPublicJWK(key) {
      return key.kty !== "oct" && typeof key.d === "undefined";
    }
    function isSecretJWK(key) {
      return isJWK(key) && key.kty === "oct" && typeof key.k === "string";
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/get_named_curve.js
var require_get_named_curve = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/get_named_curve.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.weakMap = void 0;
    var node_crypto_1 = require("node:crypto");
    var errors_js_1 = require_errors();
    var webcrypto_js_1 = require_webcrypto();
    var is_key_object_js_1 = require_is_key_object();
    var invalid_key_input_js_1 = require_invalid_key_input();
    var is_key_like_js_1 = require_is_key_like();
    var is_jwk_js_1 = require_is_jwk();
    exports2.weakMap = /* @__PURE__ */ new WeakMap();
    var namedCurveToJOSE = (namedCurve) => {
      switch (namedCurve) {
        case "prime256v1":
          return "P-256";
        case "secp384r1":
          return "P-384";
        case "secp521r1":
          return "P-521";
        case "secp256k1":
          return "secp256k1";
        default:
          throw new errors_js_1.JOSENotSupported("Unsupported key curve for this operation");
      }
    };
    var getNamedCurve = (kee, raw) => {
      let key;
      if ((0, webcrypto_js_1.isCryptoKey)(kee)) {
        key = node_crypto_1.KeyObject.from(kee);
      } else if ((0, is_key_object_js_1.default)(kee)) {
        key = kee;
      } else if ((0, is_jwk_js_1.isJWK)(kee)) {
        return kee.crv;
      } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(kee, ...is_key_like_js_1.types));
      }
      if (key.type === "secret") {
        throw new TypeError('only "private" or "public" type keys can be used for this operation');
      }
      switch (key.asymmetricKeyType) {
        case "ed25519":
        case "ed448":
          return `Ed${key.asymmetricKeyType.slice(2)}`;
        case "x25519":
        case "x448":
          return `X${key.asymmetricKeyType.slice(1)}`;
        case "ec": {
          const namedCurve = key.asymmetricKeyDetails.namedCurve;
          if (raw) {
            return namedCurve;
          }
          return namedCurveToJOSE(namedCurve);
        }
        default:
          throw new TypeError("Invalid asymmetric key type for this operation");
      }
    };
    exports2.default = getNamedCurve;
  }
});

// node_modules/jose/dist/node/cjs/runtime/ecdhes.js
var require_ecdhes = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/ecdhes.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ecdhAllowed = void 0;
    exports2.deriveKey = deriveKey;
    exports2.generateEpk = generateEpk;
    var node_crypto_1 = require("node:crypto");
    var node_util_1 = require("node:util");
    var get_named_curve_js_1 = require_get_named_curve();
    var buffer_utils_js_1 = require_buffer_utils();
    var errors_js_1 = require_errors();
    var webcrypto_js_1 = require_webcrypto();
    var crypto_key_js_1 = require_crypto_key();
    var is_key_object_js_1 = require_is_key_object();
    var invalid_key_input_js_1 = require_invalid_key_input();
    var is_key_like_js_1 = require_is_key_like();
    var generateKeyPair = (0, node_util_1.promisify)(node_crypto_1.generateKeyPair);
    async function deriveKey(publicKee, privateKee, algorithm, keyLength, apu = new Uint8Array(0), apv = new Uint8Array(0)) {
      let publicKey;
      if ((0, webcrypto_js_1.isCryptoKey)(publicKee)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(publicKee, "ECDH");
        publicKey = node_crypto_1.KeyObject.from(publicKee);
      } else if ((0, is_key_object_js_1.default)(publicKee)) {
        publicKey = publicKee;
      } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(publicKee, ...is_key_like_js_1.types));
      }
      let privateKey;
      if ((0, webcrypto_js_1.isCryptoKey)(privateKee)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(privateKee, "ECDH", "deriveBits");
        privateKey = node_crypto_1.KeyObject.from(privateKee);
      } else if ((0, is_key_object_js_1.default)(privateKee)) {
        privateKey = privateKee;
      } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(privateKee, ...is_key_like_js_1.types));
      }
      const value = (0, buffer_utils_js_1.concat)((0, buffer_utils_js_1.lengthAndInput)(buffer_utils_js_1.encoder.encode(algorithm)), (0, buffer_utils_js_1.lengthAndInput)(apu), (0, buffer_utils_js_1.lengthAndInput)(apv), (0, buffer_utils_js_1.uint32be)(keyLength));
      const sharedSecret = (0, node_crypto_1.diffieHellman)({ privateKey, publicKey });
      return (0, buffer_utils_js_1.concatKdf)(sharedSecret, keyLength, value);
    }
    async function generateEpk(kee) {
      let key;
      if ((0, webcrypto_js_1.isCryptoKey)(kee)) {
        key = node_crypto_1.KeyObject.from(kee);
      } else if ((0, is_key_object_js_1.default)(kee)) {
        key = kee;
      } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(kee, ...is_key_like_js_1.types));
      }
      switch (key.asymmetricKeyType) {
        case "x25519":
          return generateKeyPair("x25519");
        case "x448": {
          return generateKeyPair("x448");
        }
        case "ec": {
          const namedCurve = (0, get_named_curve_js_1.default)(key);
          return generateKeyPair("ec", { namedCurve });
        }
        default:
          throw new errors_js_1.JOSENotSupported("Invalid or unsupported EPK");
      }
    }
    var ecdhAllowed = (key) => ["P-256", "P-384", "P-521", "X25519", "X448"].includes((0, get_named_curve_js_1.default)(key));
    exports2.ecdhAllowed = ecdhAllowed;
  }
});

// node_modules/jose/dist/node/cjs/lib/check_p2s.js
var require_check_p2s = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/check_p2s.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = checkP2s;
    var errors_js_1 = require_errors();
    function checkP2s(p2s) {
      if (!(p2s instanceof Uint8Array) || p2s.length < 8) {
        throw new errors_js_1.JWEInvalid("PBES2 Salt Input must be 8 or more octets");
      }
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/pbes2kw.js
var require_pbes2kw = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/pbes2kw.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decrypt = exports2.encrypt = void 0;
    var node_util_1 = require("node:util");
    var node_crypto_1 = require("node:crypto");
    var random_js_1 = require_random();
    var buffer_utils_js_1 = require_buffer_utils();
    var base64url_js_1 = require_base64url();
    var aeskw_js_1 = require_aeskw();
    var check_p2s_js_1 = require_check_p2s();
    var webcrypto_js_1 = require_webcrypto();
    var crypto_key_js_1 = require_crypto_key();
    var is_key_object_js_1 = require_is_key_object();
    var invalid_key_input_js_1 = require_invalid_key_input();
    var is_key_like_js_1 = require_is_key_like();
    var pbkdf2 = (0, node_util_1.promisify)(node_crypto_1.pbkdf2);
    function getPassword(key, alg) {
      if ((0, is_key_object_js_1.default)(key)) {
        return key.export();
      }
      if (key instanceof Uint8Array) {
        return key;
      }
      if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(key, alg, "deriveBits", "deriveKey");
        return node_crypto_1.KeyObject.from(key).export();
      }
      throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types, "Uint8Array"));
    }
    var encrypt = async (alg, key, cek, p2c = 2048, p2s = (0, random_js_1.default)(new Uint8Array(16))) => {
      (0, check_p2s_js_1.default)(p2s);
      const salt = (0, buffer_utils_js_1.p2s)(alg, p2s);
      const keylen = parseInt(alg.slice(13, 16), 10) >> 3;
      const password = getPassword(key, alg);
      const derivedKey = await pbkdf2(password, salt, p2c, keylen, `sha${alg.slice(8, 11)}`);
      const encryptedKey = await (0, aeskw_js_1.wrap)(alg.slice(-6), derivedKey, cek);
      return { encryptedKey, p2c, p2s: (0, base64url_js_1.encode)(p2s) };
    };
    exports2.encrypt = encrypt;
    var decrypt = async (alg, key, encryptedKey, p2c, p2s) => {
      (0, check_p2s_js_1.default)(p2s);
      const salt = (0, buffer_utils_js_1.p2s)(alg, p2s);
      const keylen = parseInt(alg.slice(13, 16), 10) >> 3;
      const password = getPassword(key, alg);
      const derivedKey = await pbkdf2(password, salt, p2c, keylen, `sha${alg.slice(8, 11)}`);
      return (0, aeskw_js_1.unwrap)(alg.slice(-6), derivedKey, encryptedKey);
    };
    exports2.decrypt = decrypt;
  }
});

// node_modules/jose/dist/node/cjs/runtime/check_key_length.js
var require_check_key_length = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/check_key_length.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var node_crypto_1 = require("node:crypto");
    exports2.default = (key, alg) => {
      var _a;
      let modulusLength;
      try {
        if (key instanceof node_crypto_1.KeyObject) {
          modulusLength = (_a = key.asymmetricKeyDetails) == null ? void 0 : _a.modulusLength;
        } else {
          modulusLength = Buffer.from(key.n, "base64url").byteLength << 3;
        }
      } catch {
      }
      if (typeof modulusLength !== "number" || modulusLength < 2048) {
        throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
      }
    };
  }
});

// node_modules/jose/dist/node/cjs/runtime/rsaes.js
var require_rsaes = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/rsaes.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decrypt = exports2.encrypt = void 0;
    var node_crypto_1 = require("node:crypto");
    var node_util_1 = require("node:util");
    var check_key_length_js_1 = require_check_key_length();
    var webcrypto_js_1 = require_webcrypto();
    var crypto_key_js_1 = require_crypto_key();
    var is_key_object_js_1 = require_is_key_object();
    var invalid_key_input_js_1 = require_invalid_key_input();
    var is_key_like_js_1 = require_is_key_like();
    var checkKey = (key, alg) => {
      if (key.asymmetricKeyType !== "rsa") {
        throw new TypeError("Invalid key for this operation, its asymmetricKeyType must be rsa");
      }
      (0, check_key_length_js_1.default)(key, alg);
    };
    var RSA1_5 = (0, node_util_1.deprecate)(() => node_crypto_1.constants.RSA_PKCS1_PADDING, 'The RSA1_5 "alg" (JWE Algorithm) is deprecated and will be removed in the next major revision.');
    var resolvePadding = (alg) => {
      switch (alg) {
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          return node_crypto_1.constants.RSA_PKCS1_OAEP_PADDING;
        case "RSA1_5":
          return RSA1_5();
        default:
          return void 0;
      }
    };
    var resolveOaepHash = (alg) => {
      switch (alg) {
        case "RSA-OAEP":
          return "sha1";
        case "RSA-OAEP-256":
          return "sha256";
        case "RSA-OAEP-384":
          return "sha384";
        case "RSA-OAEP-512":
          return "sha512";
        default:
          return void 0;
      }
    };
    function ensureKeyObject(key, alg, ...usages) {
      if ((0, is_key_object_js_1.default)(key)) {
        return key;
      }
      if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(key, alg, ...usages);
        return node_crypto_1.KeyObject.from(key);
      }
      throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types));
    }
    var encrypt = (alg, key, cek) => {
      const padding = resolvePadding(alg);
      const oaepHash = resolveOaepHash(alg);
      const keyObject = ensureKeyObject(key, alg, "wrapKey", "encrypt");
      checkKey(keyObject, alg);
      return (0, node_crypto_1.publicEncrypt)({ key: keyObject, oaepHash, padding }, cek);
    };
    exports2.encrypt = encrypt;
    var decrypt = (alg, key, encryptedKey) => {
      const padding = resolvePadding(alg);
      const oaepHash = resolveOaepHash(alg);
      const keyObject = ensureKeyObject(key, alg, "unwrapKey", "decrypt");
      checkKey(keyObject, alg);
      return (0, node_crypto_1.privateDecrypt)({ key: keyObject, oaepHash, padding }, encryptedKey);
    };
    exports2.decrypt = decrypt;
  }
});

// node_modules/jose/dist/node/cjs/runtime/normalize_key.js
var require_normalize_key = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/normalize_key.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = {};
  }
});

// node_modules/jose/dist/node/cjs/lib/cek.js
var require_cek = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/cek.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bitLength = bitLength;
    var errors_js_1 = require_errors();
    var random_js_1 = require_random();
    function bitLength(alg) {
      switch (alg) {
        case "A128GCM":
          return 128;
        case "A192GCM":
          return 192;
        case "A256GCM":
        case "A128CBC-HS256":
          return 256;
        case "A192CBC-HS384":
          return 384;
        case "A256CBC-HS512":
          return 512;
        default:
          throw new errors_js_1.JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
      }
    }
    exports2.default = (alg) => (0, random_js_1.default)(new Uint8Array(bitLength(alg) >> 3));
  }
});

// node_modules/jose/dist/node/cjs/runtime/asn1.js
var require_asn1 = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/asn1.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromX509 = exports2.fromSPKI = exports2.fromPKCS8 = exports2.toPKCS8 = exports2.toSPKI = void 0;
    var node_crypto_1 = require("node:crypto");
    var node_buffer_1 = require("node:buffer");
    var webcrypto_js_1 = require_webcrypto();
    var is_key_object_js_1 = require_is_key_object();
    var invalid_key_input_js_1 = require_invalid_key_input();
    var is_key_like_js_1 = require_is_key_like();
    var genericExport = (keyType, keyFormat, key) => {
      let keyObject;
      if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        if (!key.extractable) {
          throw new TypeError("CryptoKey is not extractable");
        }
        keyObject = node_crypto_1.KeyObject.from(key);
      } else if ((0, is_key_object_js_1.default)(key)) {
        keyObject = key;
      } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types));
      }
      if (keyObject.type !== keyType) {
        throw new TypeError(`key is not a ${keyType} key`);
      }
      return keyObject.export({ format: "pem", type: keyFormat });
    };
    var toSPKI = (key) => {
      return genericExport("public", "spki", key);
    };
    exports2.toSPKI = toSPKI;
    var toPKCS8 = (key) => {
      return genericExport("private", "pkcs8", key);
    };
    exports2.toPKCS8 = toPKCS8;
    var fromPKCS8 = (pem) => (0, node_crypto_1.createPrivateKey)({
      key: node_buffer_1.Buffer.from(pem.replace(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, ""), "base64"),
      type: "pkcs8",
      format: "der"
    });
    exports2.fromPKCS8 = fromPKCS8;
    var fromSPKI = (pem) => (0, node_crypto_1.createPublicKey)({
      key: node_buffer_1.Buffer.from(pem.replace(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, ""), "base64"),
      type: "spki",
      format: "der"
    });
    exports2.fromSPKI = fromSPKI;
    var fromX509 = (pem) => (0, node_crypto_1.createPublicKey)({
      key: pem,
      type: "spki",
      format: "pem"
    });
    exports2.fromX509 = fromX509;
  }
});

// node_modules/jose/dist/node/cjs/runtime/jwk_to_key.js
var require_jwk_to_key = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/jwk_to_key.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var node_crypto_1 = require("node:crypto");
    var parse = (key) => {
      if (key.d) {
        return (0, node_crypto_1.createPrivateKey)({ format: "jwk", key });
      }
      return (0, node_crypto_1.createPublicKey)({ format: "jwk", key });
    };
    exports2.default = parse;
  }
});

// node_modules/jose/dist/node/cjs/key/import.js
var require_import = __commonJS({
  "node_modules/jose/dist/node/cjs/key/import.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.importSPKI = importSPKI;
    exports2.importX509 = importX509;
    exports2.importPKCS8 = importPKCS8;
    exports2.importJWK = importJWK;
    var base64url_js_1 = require_base64url();
    var asn1_js_1 = require_asn1();
    var jwk_to_key_js_1 = require_jwk_to_key();
    var errors_js_1 = require_errors();
    var is_object_js_1 = require_is_object();
    async function importSPKI(spki, alg, options) {
      if (typeof spki !== "string" || spki.indexOf("-----BEGIN PUBLIC KEY-----") !== 0) {
        throw new TypeError('"spki" must be SPKI formatted string');
      }
      return (0, asn1_js_1.fromSPKI)(spki, alg, options);
    }
    async function importX509(x509, alg, options) {
      if (typeof x509 !== "string" || x509.indexOf("-----BEGIN CERTIFICATE-----") !== 0) {
        throw new TypeError('"x509" must be X.509 formatted string');
      }
      return (0, asn1_js_1.fromX509)(x509, alg, options);
    }
    async function importPKCS8(pkcs8, alg, options) {
      if (typeof pkcs8 !== "string" || pkcs8.indexOf("-----BEGIN PRIVATE KEY-----") !== 0) {
        throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
      }
      return (0, asn1_js_1.fromPKCS8)(pkcs8, alg, options);
    }
    async function importJWK(jwk, alg) {
      if (!(0, is_object_js_1.default)(jwk)) {
        throw new TypeError("JWK must be an object");
      }
      alg ||= jwk.alg;
      switch (jwk.kty) {
        case "oct":
          if (typeof jwk.k !== "string" || !jwk.k) {
            throw new TypeError('missing "k" (Key Value) Parameter value');
          }
          return (0, base64url_js_1.decode)(jwk.k);
        case "RSA":
          if ("oth" in jwk && jwk.oth !== void 0) {
            throw new errors_js_1.JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
          }
        case "EC":
        case "OKP":
          return (0, jwk_to_key_js_1.default)({ ...jwk, alg });
        default:
          throw new errors_js_1.JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
      }
    }
  }
});

// node_modules/jose/dist/node/cjs/lib/check_key_type.js
var require_check_key_type = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/check_key_type.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.checkKeyTypeWithJwk = void 0;
    var invalid_key_input_js_1 = require_invalid_key_input();
    var is_key_like_js_1 = require_is_key_like();
    var jwk = require_is_jwk();
    var tag = (key) => key == null ? void 0 : key[Symbol.toStringTag];
    var jwkMatchesOp = (alg, key, usage) => {
      var _a, _b;
      if (key.use !== void 0 && key.use !== "sig") {
        throw new TypeError("Invalid key for this operation, when present its use must be sig");
      }
      if (key.key_ops !== void 0 && ((_b = (_a = key.key_ops).includes) == null ? void 0 : _b.call(_a, usage)) !== true) {
        throw new TypeError(`Invalid key for this operation, when present its key_ops must include ${usage}`);
      }
      if (key.alg !== void 0 && key.alg !== alg) {
        throw new TypeError(`Invalid key for this operation, when present its alg must be ${alg}`);
      }
      return true;
    };
    var symmetricTypeCheck = (alg, key, usage, allowJwk) => {
      if (key instanceof Uint8Array)
        return;
      if (allowJwk && jwk.isJWK(key)) {
        if (jwk.isSecretJWK(key) && jwkMatchesOp(alg, key, usage))
          return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
      }
      if (!(0, is_key_like_js_1.default)(key)) {
        throw new TypeError((0, invalid_key_input_js_1.withAlg)(alg, key, ...is_key_like_js_1.types, "Uint8Array", allowJwk ? "JSON Web Key" : null));
      }
      if (key.type !== "secret") {
        throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
      }
    };
    var asymmetricTypeCheck = (alg, key, usage, allowJwk) => {
      if (allowJwk && jwk.isJWK(key)) {
        switch (usage) {
          case "sign":
            if (jwk.isPrivateJWK(key) && jwkMatchesOp(alg, key, usage))
              return;
            throw new TypeError(`JSON Web Key for this operation be a private JWK`);
          case "verify":
            if (jwk.isPublicJWK(key) && jwkMatchesOp(alg, key, usage))
              return;
            throw new TypeError(`JSON Web Key for this operation be a public JWK`);
        }
      }
      if (!(0, is_key_like_js_1.default)(key)) {
        throw new TypeError((0, invalid_key_input_js_1.withAlg)(alg, key, ...is_key_like_js_1.types, allowJwk ? "JSON Web Key" : null));
      }
      if (key.type === "secret") {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
      }
      if (usage === "sign" && key.type === "public") {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
      }
      if (usage === "decrypt" && key.type === "public") {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
      }
      if (key.algorithm && usage === "verify" && key.type === "private") {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
      }
      if (key.algorithm && usage === "encrypt" && key.type === "private") {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
      }
    };
    function checkKeyType(allowJwk, alg, key, usage) {
      const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg);
      if (symmetric) {
        symmetricTypeCheck(alg, key, usage, allowJwk);
      } else {
        asymmetricTypeCheck(alg, key, usage, allowJwk);
      }
    }
    exports2.default = checkKeyType.bind(void 0, false);
    exports2.checkKeyTypeWithJwk = checkKeyType.bind(void 0, true);
  }
});

// node_modules/jose/dist/node/cjs/runtime/encrypt.js
var require_encrypt = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/encrypt.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var node_crypto_1 = require("node:crypto");
    var check_iv_length_js_1 = require_check_iv_length();
    var check_cek_length_js_1 = require_check_cek_length();
    var buffer_utils_js_1 = require_buffer_utils();
    var cbc_tag_js_1 = require_cbc_tag();
    var webcrypto_js_1 = require_webcrypto();
    var crypto_key_js_1 = require_crypto_key();
    var is_key_object_js_1 = require_is_key_object();
    var invalid_key_input_js_1 = require_invalid_key_input();
    var iv_js_1 = require_iv();
    var errors_js_1 = require_errors();
    var ciphers_js_1 = require_ciphers();
    var is_key_like_js_1 = require_is_key_like();
    function cbcEncrypt(enc, plaintext, cek, iv, aad) {
      const keySize = parseInt(enc.slice(1, 4), 10);
      if ((0, is_key_object_js_1.default)(cek)) {
        cek = cek.export();
      }
      const encKey = cek.subarray(keySize >> 3);
      const macKey = cek.subarray(0, keySize >> 3);
      const algorithm = `aes-${keySize}-cbc`;
      if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${enc} is not supported by your javascript runtime`);
      }
      const cipher = (0, node_crypto_1.createCipheriv)(algorithm, encKey, iv);
      const ciphertext = (0, buffer_utils_js_1.concat)(cipher.update(plaintext), cipher.final());
      const macSize = parseInt(enc.slice(-3), 10);
      const tag = (0, cbc_tag_js_1.default)(aad, iv, ciphertext, macSize, macKey, keySize);
      return { ciphertext, tag, iv };
    }
    function gcmEncrypt(enc, plaintext, cek, iv, aad) {
      const keySize = parseInt(enc.slice(1, 4), 10);
      const algorithm = `aes-${keySize}-gcm`;
      if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${enc} is not supported by your javascript runtime`);
      }
      const cipher = (0, node_crypto_1.createCipheriv)(algorithm, cek, iv, { authTagLength: 16 });
      if (aad.byteLength) {
        cipher.setAAD(aad, { plaintextLength: plaintext.length });
      }
      const ciphertext = cipher.update(plaintext);
      cipher.final();
      const tag = cipher.getAuthTag();
      return { ciphertext, tag, iv };
    }
    var encrypt = (enc, plaintext, cek, iv, aad) => {
      let key;
      if ((0, webcrypto_js_1.isCryptoKey)(cek)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(cek, enc, "encrypt");
        key = node_crypto_1.KeyObject.from(cek);
      } else if (cek instanceof Uint8Array || (0, is_key_object_js_1.default)(cek)) {
        key = cek;
      } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(cek, ...is_key_like_js_1.types, "Uint8Array"));
      }
      (0, check_cek_length_js_1.default)(enc, key);
      if (iv) {
        (0, check_iv_length_js_1.default)(enc, iv);
      } else {
        iv = (0, iv_js_1.default)(enc);
      }
      switch (enc) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          return cbcEncrypt(enc, plaintext, key, iv, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          return gcmEncrypt(enc, plaintext, key, iv, aad);
        default:
          throw new errors_js_1.JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    exports2.default = encrypt;
  }
});

// node_modules/jose/dist/node/cjs/lib/aesgcmkw.js
var require_aesgcmkw = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/aesgcmkw.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.wrap = wrap;
    exports2.unwrap = unwrap;
    var encrypt_js_1 = require_encrypt();
    var decrypt_js_1 = require_decrypt();
    var base64url_js_1 = require_base64url();
    async function wrap(alg, key, cek, iv) {
      const jweAlgorithm = alg.slice(0, 7);
      const wrapped = await (0, encrypt_js_1.default)(jweAlgorithm, cek, key, iv, new Uint8Array(0));
      return {
        encryptedKey: wrapped.ciphertext,
        iv: (0, base64url_js_1.encode)(wrapped.iv),
        tag: (0, base64url_js_1.encode)(wrapped.tag)
      };
    }
    async function unwrap(alg, key, encryptedKey, iv, tag) {
      const jweAlgorithm = alg.slice(0, 7);
      return (0, decrypt_js_1.default)(jweAlgorithm, key, encryptedKey, iv, tag, new Uint8Array(0));
    }
  }
});

// node_modules/jose/dist/node/cjs/lib/decrypt_key_management.js
var require_decrypt_key_management = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/decrypt_key_management.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var aeskw_js_1 = require_aeskw();
    var ECDH = require_ecdhes();
    var pbes2kw_js_1 = require_pbes2kw();
    var rsaes_js_1 = require_rsaes();
    var base64url_js_1 = require_base64url();
    var normalize_key_js_1 = require_normalize_key();
    var errors_js_1 = require_errors();
    var cek_js_1 = require_cek();
    var import_js_1 = require_import();
    var check_key_type_js_1 = require_check_key_type();
    var is_object_js_1 = require_is_object();
    var aesgcmkw_js_1 = require_aesgcmkw();
    async function decryptKeyManagement(alg, key, encryptedKey, joseHeader, options) {
      var _a, _b;
      (0, check_key_type_js_1.default)(alg, key, "decrypt");
      key = await ((_b = (_a = normalize_key_js_1.default).normalizePrivateKey) == null ? void 0 : _b.call(_a, key, alg)) || key;
      switch (alg) {
        case "dir": {
          if (encryptedKey !== void 0)
            throw new errors_js_1.JWEInvalid("Encountered unexpected JWE Encrypted Key");
          return key;
        }
        case "ECDH-ES":
          if (encryptedKey !== void 0)
            throw new errors_js_1.JWEInvalid("Encountered unexpected JWE Encrypted Key");
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW": {
          if (!(0, is_object_js_1.default)(joseHeader.epk))
            throw new errors_js_1.JWEInvalid(`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`);
          if (!ECDH.ecdhAllowed(key))
            throw new errors_js_1.JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
          const epk = await (0, import_js_1.importJWK)(joseHeader.epk, alg);
          let partyUInfo;
          let partyVInfo;
          if (joseHeader.apu !== void 0) {
            if (typeof joseHeader.apu !== "string")
              throw new errors_js_1.JWEInvalid(`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
            try {
              partyUInfo = (0, base64url_js_1.decode)(joseHeader.apu);
            } catch {
              throw new errors_js_1.JWEInvalid("Failed to base64url decode the apu");
            }
          }
          if (joseHeader.apv !== void 0) {
            if (typeof joseHeader.apv !== "string")
              throw new errors_js_1.JWEInvalid(`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
            try {
              partyVInfo = (0, base64url_js_1.decode)(joseHeader.apv);
            } catch {
              throw new errors_js_1.JWEInvalid("Failed to base64url decode the apv");
            }
          }
          const sharedSecret = await ECDH.deriveKey(epk, key, alg === "ECDH-ES" ? joseHeader.enc : alg, alg === "ECDH-ES" ? (0, cek_js_1.bitLength)(joseHeader.enc) : parseInt(alg.slice(-5, -2), 10), partyUInfo, partyVInfo);
          if (alg === "ECDH-ES")
            return sharedSecret;
          if (encryptedKey === void 0)
            throw new errors_js_1.JWEInvalid("JWE Encrypted Key missing");
          return (0, aeskw_js_1.unwrap)(alg.slice(-6), sharedSecret, encryptedKey);
        }
        case "RSA1_5":
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512": {
          if (encryptedKey === void 0)
            throw new errors_js_1.JWEInvalid("JWE Encrypted Key missing");
          return (0, rsaes_js_1.decrypt)(alg, key, encryptedKey);
        }
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW": {
          if (encryptedKey === void 0)
            throw new errors_js_1.JWEInvalid("JWE Encrypted Key missing");
          if (typeof joseHeader.p2c !== "number")
            throw new errors_js_1.JWEInvalid(`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
          const p2cLimit = (options == null ? void 0 : options.maxPBES2Count) || 1e4;
          if (joseHeader.p2c > p2cLimit)
            throw new errors_js_1.JWEInvalid(`JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`);
          if (typeof joseHeader.p2s !== "string")
            throw new errors_js_1.JWEInvalid(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
          let p2s;
          try {
            p2s = (0, base64url_js_1.decode)(joseHeader.p2s);
          } catch {
            throw new errors_js_1.JWEInvalid("Failed to base64url decode the p2s");
          }
          return (0, pbes2kw_js_1.decrypt)(alg, key, encryptedKey, joseHeader.p2c, p2s);
        }
        case "A128KW":
        case "A192KW":
        case "A256KW": {
          if (encryptedKey === void 0)
            throw new errors_js_1.JWEInvalid("JWE Encrypted Key missing");
          return (0, aeskw_js_1.unwrap)(alg, key, encryptedKey);
        }
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW": {
          if (encryptedKey === void 0)
            throw new errors_js_1.JWEInvalid("JWE Encrypted Key missing");
          if (typeof joseHeader.iv !== "string")
            throw new errors_js_1.JWEInvalid(`JOSE Header "iv" (Initialization Vector) missing or invalid`);
          if (typeof joseHeader.tag !== "string")
            throw new errors_js_1.JWEInvalid(`JOSE Header "tag" (Authentication Tag) missing or invalid`);
          let iv;
          try {
            iv = (0, base64url_js_1.decode)(joseHeader.iv);
          } catch {
            throw new errors_js_1.JWEInvalid("Failed to base64url decode the iv");
          }
          let tag;
          try {
            tag = (0, base64url_js_1.decode)(joseHeader.tag);
          } catch {
            throw new errors_js_1.JWEInvalid("Failed to base64url decode the tag");
          }
          return (0, aesgcmkw_js_1.unwrap)(alg, key, encryptedKey, iv, tag);
        }
        default: {
          throw new errors_js_1.JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
        }
      }
    }
    exports2.default = decryptKeyManagement;
  }
});

// node_modules/jose/dist/node/cjs/lib/validate_crit.js
var require_validate_crit = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/validate_crit.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var errors_js_1 = require_errors();
    function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
      if (joseHeader.crit !== void 0 && (protectedHeader == null ? void 0 : protectedHeader.crit) === void 0) {
        throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
      }
      if (!protectedHeader || protectedHeader.crit === void 0) {
        return /* @__PURE__ */ new Set();
      }
      if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
        throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
      }
      let recognized;
      if (recognizedOption !== void 0) {
        recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
      } else {
        recognized = recognizedDefault;
      }
      for (const parameter of protectedHeader.crit) {
        if (!recognized.has(parameter)) {
          throw new errors_js_1.JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
        }
        if (joseHeader[parameter] === void 0) {
          throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        }
        if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
          throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
        }
      }
      return new Set(protectedHeader.crit);
    }
    exports2.default = validateCrit;
  }
});

// node_modules/jose/dist/node/cjs/lib/validate_algorithms.js
var require_validate_algorithms = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/validate_algorithms.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var validateAlgorithms = (option, algorithms) => {
      if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
      }
      if (!algorithms) {
        return void 0;
      }
      return new Set(algorithms);
    };
    exports2.default = validateAlgorithms;
  }
});

// node_modules/jose/dist/node/cjs/jwe/flattened/decrypt.js
var require_decrypt2 = __commonJS({
  "node_modules/jose/dist/node/cjs/jwe/flattened/decrypt.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.flattenedDecrypt = flattenedDecrypt;
    var base64url_js_1 = require_base64url();
    var decrypt_js_1 = require_decrypt();
    var errors_js_1 = require_errors();
    var is_disjoint_js_1 = require_is_disjoint();
    var is_object_js_1 = require_is_object();
    var decrypt_key_management_js_1 = require_decrypt_key_management();
    var buffer_utils_js_1 = require_buffer_utils();
    var cek_js_1 = require_cek();
    var validate_crit_js_1 = require_validate_crit();
    var validate_algorithms_js_1 = require_validate_algorithms();
    async function flattenedDecrypt(jwe, key, options) {
      if (!(0, is_object_js_1.default)(jwe)) {
        throw new errors_js_1.JWEInvalid("Flattened JWE must be an object");
      }
      if (jwe.protected === void 0 && jwe.header === void 0 && jwe.unprotected === void 0) {
        throw new errors_js_1.JWEInvalid("JOSE Header missing");
      }
      if (jwe.iv !== void 0 && typeof jwe.iv !== "string") {
        throw new errors_js_1.JWEInvalid("JWE Initialization Vector incorrect type");
      }
      if (typeof jwe.ciphertext !== "string") {
        throw new errors_js_1.JWEInvalid("JWE Ciphertext missing or incorrect type");
      }
      if (jwe.tag !== void 0 && typeof jwe.tag !== "string") {
        throw new errors_js_1.JWEInvalid("JWE Authentication Tag incorrect type");
      }
      if (jwe.protected !== void 0 && typeof jwe.protected !== "string") {
        throw new errors_js_1.JWEInvalid("JWE Protected Header incorrect type");
      }
      if (jwe.encrypted_key !== void 0 && typeof jwe.encrypted_key !== "string") {
        throw new errors_js_1.JWEInvalid("JWE Encrypted Key incorrect type");
      }
      if (jwe.aad !== void 0 && typeof jwe.aad !== "string") {
        throw new errors_js_1.JWEInvalid("JWE AAD incorrect type");
      }
      if (jwe.header !== void 0 && !(0, is_object_js_1.default)(jwe.header)) {
        throw new errors_js_1.JWEInvalid("JWE Shared Unprotected Header incorrect type");
      }
      if (jwe.unprotected !== void 0 && !(0, is_object_js_1.default)(jwe.unprotected)) {
        throw new errors_js_1.JWEInvalid("JWE Per-Recipient Unprotected Header incorrect type");
      }
      let parsedProt;
      if (jwe.protected) {
        try {
          const protectedHeader2 = (0, base64url_js_1.decode)(jwe.protected);
          parsedProt = JSON.parse(buffer_utils_js_1.decoder.decode(protectedHeader2));
        } catch {
          throw new errors_js_1.JWEInvalid("JWE Protected Header is invalid");
        }
      }
      if (!(0, is_disjoint_js_1.default)(parsedProt, jwe.header, jwe.unprotected)) {
        throw new errors_js_1.JWEInvalid("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
      }
      const joseHeader = {
        ...parsedProt,
        ...jwe.header,
        ...jwe.unprotected
      };
      (0, validate_crit_js_1.default)(errors_js_1.JWEInvalid, /* @__PURE__ */ new Map(), options == null ? void 0 : options.crit, parsedProt, joseHeader);
      if (joseHeader.zip !== void 0) {
        throw new errors_js_1.JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
      }
      const { alg, enc } = joseHeader;
      if (typeof alg !== "string" || !alg) {
        throw new errors_js_1.JWEInvalid("missing JWE Algorithm (alg) in JWE Header");
      }
      if (typeof enc !== "string" || !enc) {
        throw new errors_js_1.JWEInvalid("missing JWE Encryption Algorithm (enc) in JWE Header");
      }
      const keyManagementAlgorithms = options && (0, validate_algorithms_js_1.default)("keyManagementAlgorithms", options.keyManagementAlgorithms);
      const contentEncryptionAlgorithms = options && (0, validate_algorithms_js_1.default)("contentEncryptionAlgorithms", options.contentEncryptionAlgorithms);
      if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg) || !keyManagementAlgorithms && alg.startsWith("PBES2")) {
        throw new errors_js_1.JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
      }
      if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc)) {
        throw new errors_js_1.JOSEAlgNotAllowed('"enc" (Encryption Algorithm) Header Parameter value not allowed');
      }
      let encryptedKey;
      if (jwe.encrypted_key !== void 0) {
        try {
          encryptedKey = (0, base64url_js_1.decode)(jwe.encrypted_key);
        } catch {
          throw new errors_js_1.JWEInvalid("Failed to base64url decode the encrypted_key");
        }
      }
      let resolvedKey = false;
      if (typeof key === "function") {
        key = await key(parsedProt, jwe);
        resolvedKey = true;
      }
      let cek;
      try {
        cek = await (0, decrypt_key_management_js_1.default)(alg, key, encryptedKey, joseHeader, options);
      } catch (err) {
        if (err instanceof TypeError || err instanceof errors_js_1.JWEInvalid || err instanceof errors_js_1.JOSENotSupported) {
          throw err;
        }
        cek = (0, cek_js_1.default)(enc);
      }
      let iv;
      let tag;
      if (jwe.iv !== void 0) {
        try {
          iv = (0, base64url_js_1.decode)(jwe.iv);
        } catch {
          throw new errors_js_1.JWEInvalid("Failed to base64url decode the iv");
        }
      }
      if (jwe.tag !== void 0) {
        try {
          tag = (0, base64url_js_1.decode)(jwe.tag);
        } catch {
          throw new errors_js_1.JWEInvalid("Failed to base64url decode the tag");
        }
      }
      const protectedHeader = buffer_utils_js_1.encoder.encode(jwe.protected ?? "");
      let additionalData;
      if (jwe.aad !== void 0) {
        additionalData = (0, buffer_utils_js_1.concat)(protectedHeader, buffer_utils_js_1.encoder.encode("."), buffer_utils_js_1.encoder.encode(jwe.aad));
      } else {
        additionalData = protectedHeader;
      }
      let ciphertext;
      try {
        ciphertext = (0, base64url_js_1.decode)(jwe.ciphertext);
      } catch {
        throw new errors_js_1.JWEInvalid("Failed to base64url decode the ciphertext");
      }
      const plaintext = await (0, decrypt_js_1.default)(enc, cek, ciphertext, iv, tag, additionalData);
      const result = { plaintext };
      if (jwe.protected !== void 0) {
        result.protectedHeader = parsedProt;
      }
      if (jwe.aad !== void 0) {
        try {
          result.additionalAuthenticatedData = (0, base64url_js_1.decode)(jwe.aad);
        } catch {
          throw new errors_js_1.JWEInvalid("Failed to base64url decode the aad");
        }
      }
      if (jwe.unprotected !== void 0) {
        result.sharedUnprotectedHeader = jwe.unprotected;
      }
      if (jwe.header !== void 0) {
        result.unprotectedHeader = jwe.header;
      }
      if (resolvedKey) {
        return { ...result, key };
      }
      return result;
    }
  }
});

// node_modules/jose/dist/node/cjs/jwe/compact/decrypt.js
var require_decrypt3 = __commonJS({
  "node_modules/jose/dist/node/cjs/jwe/compact/decrypt.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.compactDecrypt = compactDecrypt;
    var decrypt_js_1 = require_decrypt2();
    var errors_js_1 = require_errors();
    var buffer_utils_js_1 = require_buffer_utils();
    async function compactDecrypt(jwe, key, options) {
      if (jwe instanceof Uint8Array) {
        jwe = buffer_utils_js_1.decoder.decode(jwe);
      }
      if (typeof jwe !== "string") {
        throw new errors_js_1.JWEInvalid("Compact JWE must be a string or Uint8Array");
      }
      const { 0: protectedHeader, 1: encryptedKey, 2: iv, 3: ciphertext, 4: tag, length } = jwe.split(".");
      if (length !== 5) {
        throw new errors_js_1.JWEInvalid("Invalid Compact JWE");
      }
      const decrypted = await (0, decrypt_js_1.flattenedDecrypt)({
        ciphertext,
        iv: iv || void 0,
        protected: protectedHeader,
        tag: tag || void 0,
        encrypted_key: encryptedKey || void 0
      }, key, options);
      const result = { plaintext: decrypted.plaintext, protectedHeader: decrypted.protectedHeader };
      if (typeof key === "function") {
        return { ...result, key: decrypted.key };
      }
      return result;
    }
  }
});

// node_modules/jose/dist/node/cjs/jwe/general/decrypt.js
var require_decrypt4 = __commonJS({
  "node_modules/jose/dist/node/cjs/jwe/general/decrypt.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generalDecrypt = generalDecrypt;
    var decrypt_js_1 = require_decrypt2();
    var errors_js_1 = require_errors();
    var is_object_js_1 = require_is_object();
    async function generalDecrypt(jwe, key, options) {
      if (!(0, is_object_js_1.default)(jwe)) {
        throw new errors_js_1.JWEInvalid("General JWE must be an object");
      }
      if (!Array.isArray(jwe.recipients) || !jwe.recipients.every(is_object_js_1.default)) {
        throw new errors_js_1.JWEInvalid("JWE Recipients missing or incorrect type");
      }
      if (!jwe.recipients.length) {
        throw new errors_js_1.JWEInvalid("JWE Recipients has no members");
      }
      for (const recipient of jwe.recipients) {
        try {
          return await (0, decrypt_js_1.flattenedDecrypt)({
            aad: jwe.aad,
            ciphertext: jwe.ciphertext,
            encrypted_key: recipient.encrypted_key,
            header: recipient.header,
            iv: jwe.iv,
            protected: jwe.protected,
            tag: jwe.tag,
            unprotected: jwe.unprotected
          }, key, options);
        } catch {
        }
      }
      throw new errors_js_1.JWEDecryptionFailed();
    }
  }
});

// node_modules/jose/dist/node/cjs/lib/private_symbols.js
var require_private_symbols = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/private_symbols.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.unprotected = void 0;
    exports2.unprotected = /* @__PURE__ */ Symbol();
  }
});

// node_modules/jose/dist/node/cjs/runtime/key_to_jwk.js
var require_key_to_jwk = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/key_to_jwk.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var node_crypto_1 = require("node:crypto");
    var base64url_js_1 = require_base64url();
    var errors_js_1 = require_errors();
    var webcrypto_js_1 = require_webcrypto();
    var is_key_object_js_1 = require_is_key_object();
    var invalid_key_input_js_1 = require_invalid_key_input();
    var is_key_like_js_1 = require_is_key_like();
    var keyToJWK = (key) => {
      let keyObject;
      if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        if (!key.extractable) {
          throw new TypeError("CryptoKey is not extractable");
        }
        keyObject = node_crypto_1.KeyObject.from(key);
      } else if ((0, is_key_object_js_1.default)(key)) {
        keyObject = key;
      } else if (key instanceof Uint8Array) {
        return {
          kty: "oct",
          k: (0, base64url_js_1.encode)(key)
        };
      } else {
        throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types, "Uint8Array"));
      }
      if (keyObject.type !== "secret" && !["rsa", "ec", "ed25519", "x25519", "ed448", "x448"].includes(keyObject.asymmetricKeyType)) {
        throw new errors_js_1.JOSENotSupported("Unsupported key asymmetricKeyType");
      }
      return keyObject.export({ format: "jwk" });
    };
    exports2.default = keyToJWK;
  }
});

// node_modules/jose/dist/node/cjs/key/export.js
var require_export = __commonJS({
  "node_modules/jose/dist/node/cjs/key/export.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.exportSPKI = exportSPKI;
    exports2.exportPKCS8 = exportPKCS8;
    exports2.exportJWK = exportJWK;
    var asn1_js_1 = require_asn1();
    var asn1_js_2 = require_asn1();
    var key_to_jwk_js_1 = require_key_to_jwk();
    async function exportSPKI(key) {
      return (0, asn1_js_1.toSPKI)(key);
    }
    async function exportPKCS8(key) {
      return (0, asn1_js_2.toPKCS8)(key);
    }
    async function exportJWK(key) {
      return (0, key_to_jwk_js_1.default)(key);
    }
  }
});

// node_modules/jose/dist/node/cjs/lib/encrypt_key_management.js
var require_encrypt_key_management = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/encrypt_key_management.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var aeskw_js_1 = require_aeskw();
    var ECDH = require_ecdhes();
    var pbes2kw_js_1 = require_pbes2kw();
    var rsaes_js_1 = require_rsaes();
    var base64url_js_1 = require_base64url();
    var normalize_key_js_1 = require_normalize_key();
    var cek_js_1 = require_cek();
    var errors_js_1 = require_errors();
    var export_js_1 = require_export();
    var check_key_type_js_1 = require_check_key_type();
    var aesgcmkw_js_1 = require_aesgcmkw();
    async function encryptKeyManagement(alg, enc, key, providedCek, providedParameters = {}) {
      var _a, _b;
      let encryptedKey;
      let parameters;
      let cek;
      (0, check_key_type_js_1.default)(alg, key, "encrypt");
      key = await ((_b = (_a = normalize_key_js_1.default).normalizePublicKey) == null ? void 0 : _b.call(_a, key, alg)) || key;
      switch (alg) {
        case "dir": {
          cek = key;
          break;
        }
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW": {
          if (!ECDH.ecdhAllowed(key)) {
            throw new errors_js_1.JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
          }
          const { apu, apv } = providedParameters;
          let { epk: ephemeralKey } = providedParameters;
          ephemeralKey ||= (await ECDH.generateEpk(key)).privateKey;
          const { x, y, crv, kty } = await (0, export_js_1.exportJWK)(ephemeralKey);
          const sharedSecret = await ECDH.deriveKey(key, ephemeralKey, alg === "ECDH-ES" ? enc : alg, alg === "ECDH-ES" ? (0, cek_js_1.bitLength)(enc) : parseInt(alg.slice(-5, -2), 10), apu, apv);
          parameters = { epk: { x, crv, kty } };
          if (kty === "EC")
            parameters.epk.y = y;
          if (apu)
            parameters.apu = (0, base64url_js_1.encode)(apu);
          if (apv)
            parameters.apv = (0, base64url_js_1.encode)(apv);
          if (alg === "ECDH-ES") {
            cek = sharedSecret;
            break;
          }
          cek = providedCek || (0, cek_js_1.default)(enc);
          const kwAlg = alg.slice(-6);
          encryptedKey = await (0, aeskw_js_1.wrap)(kwAlg, sharedSecret, cek);
          break;
        }
        case "RSA1_5":
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512": {
          cek = providedCek || (0, cek_js_1.default)(enc);
          encryptedKey = await (0, rsaes_js_1.encrypt)(alg, key, cek);
          break;
        }
        case "PBES2-HS256+A128KW":
        case "PBES2-HS384+A192KW":
        case "PBES2-HS512+A256KW": {
          cek = providedCek || (0, cek_js_1.default)(enc);
          const { p2c, p2s } = providedParameters;
          ({ encryptedKey, ...parameters } = await (0, pbes2kw_js_1.encrypt)(alg, key, cek, p2c, p2s));
          break;
        }
        case "A128KW":
        case "A192KW":
        case "A256KW": {
          cek = providedCek || (0, cek_js_1.default)(enc);
          encryptedKey = await (0, aeskw_js_1.wrap)(alg, key, cek);
          break;
        }
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW": {
          cek = providedCek || (0, cek_js_1.default)(enc);
          const { iv } = providedParameters;
          ({ encryptedKey, ...parameters } = await (0, aesgcmkw_js_1.wrap)(alg, key, cek, iv));
          break;
        }
        default: {
          throw new errors_js_1.JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
        }
      }
      return { cek, encryptedKey, parameters };
    }
    exports2.default = encryptKeyManagement;
  }
});

// node_modules/jose/dist/node/cjs/jwe/flattened/encrypt.js
var require_encrypt2 = __commonJS({
  "node_modules/jose/dist/node/cjs/jwe/flattened/encrypt.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FlattenedEncrypt = void 0;
    var base64url_js_1 = require_base64url();
    var private_symbols_js_1 = require_private_symbols();
    var encrypt_js_1 = require_encrypt();
    var encrypt_key_management_js_1 = require_encrypt_key_management();
    var errors_js_1 = require_errors();
    var is_disjoint_js_1 = require_is_disjoint();
    var buffer_utils_js_1 = require_buffer_utils();
    var validate_crit_js_1 = require_validate_crit();
    var FlattenedEncrypt = class {
      _plaintext;
      _protectedHeader;
      _sharedUnprotectedHeader;
      _unprotectedHeader;
      _aad;
      _cek;
      _iv;
      _keyManagementParameters;
      constructor(plaintext) {
        if (!(plaintext instanceof Uint8Array)) {
          throw new TypeError("plaintext must be an instance of Uint8Array");
        }
        this._plaintext = plaintext;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._sharedUnprotectedHeader) {
          throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this._sharedUnprotectedHeader = sharedUnprotectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
      }
      setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      async encrypt(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) {
          throw new errors_js_1.JWEInvalid("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
        }
        if (!(0, is_disjoint_js_1.default)(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
          throw new errors_js_1.JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
        }
        const joseHeader = {
          ...this._protectedHeader,
          ...this._unprotectedHeader,
          ...this._sharedUnprotectedHeader
        };
        (0, validate_crit_js_1.default)(errors_js_1.JWEInvalid, /* @__PURE__ */ new Map(), options == null ? void 0 : options.crit, this._protectedHeader, joseHeader);
        if (joseHeader.zip !== void 0) {
          throw new errors_js_1.JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
        }
        const { alg, enc } = joseHeader;
        if (typeof alg !== "string" || !alg) {
          throw new errors_js_1.JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc !== "string" || !enc) {
          throw new errors_js_1.JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let encryptedKey;
        if (this._cek && (alg === "dir" || alg === "ECDH-ES")) {
          throw new TypeError(`setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${alg}`);
        }
        let cek;
        {
          let parameters;
          ({ cek, encryptedKey, parameters } = await (0, encrypt_key_management_js_1.default)(alg, enc, key, this._cek, this._keyManagementParameters));
          if (parameters) {
            if (options && private_symbols_js_1.unprotected in options) {
              if (!this._unprotectedHeader) {
                this.setUnprotectedHeader(parameters);
              } else {
                this._unprotectedHeader = { ...this._unprotectedHeader, ...parameters };
              }
            } else if (!this._protectedHeader) {
              this.setProtectedHeader(parameters);
            } else {
              this._protectedHeader = { ...this._protectedHeader, ...parameters };
            }
          }
        }
        let additionalData;
        let protectedHeader;
        let aadMember;
        if (this._protectedHeader) {
          protectedHeader = buffer_utils_js_1.encoder.encode((0, base64url_js_1.encode)(JSON.stringify(this._protectedHeader)));
        } else {
          protectedHeader = buffer_utils_js_1.encoder.encode("");
        }
        if (this._aad) {
          aadMember = (0, base64url_js_1.encode)(this._aad);
          additionalData = (0, buffer_utils_js_1.concat)(protectedHeader, buffer_utils_js_1.encoder.encode("."), buffer_utils_js_1.encoder.encode(aadMember));
        } else {
          additionalData = protectedHeader;
        }
        const { ciphertext, tag, iv } = await (0, encrypt_js_1.default)(enc, this._plaintext, cek, this._iv, additionalData);
        const jwe = {
          ciphertext: (0, base64url_js_1.encode)(ciphertext)
        };
        if (iv) {
          jwe.iv = (0, base64url_js_1.encode)(iv);
        }
        if (tag) {
          jwe.tag = (0, base64url_js_1.encode)(tag);
        }
        if (encryptedKey) {
          jwe.encrypted_key = (0, base64url_js_1.encode)(encryptedKey);
        }
        if (aadMember) {
          jwe.aad = aadMember;
        }
        if (this._protectedHeader) {
          jwe.protected = buffer_utils_js_1.decoder.decode(protectedHeader);
        }
        if (this._sharedUnprotectedHeader) {
          jwe.unprotected = this._sharedUnprotectedHeader;
        }
        if (this._unprotectedHeader) {
          jwe.header = this._unprotectedHeader;
        }
        return jwe;
      }
    };
    exports2.FlattenedEncrypt = FlattenedEncrypt;
  }
});

// node_modules/jose/dist/node/cjs/jwe/general/encrypt.js
var require_encrypt3 = __commonJS({
  "node_modules/jose/dist/node/cjs/jwe/general/encrypt.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.GeneralEncrypt = void 0;
    var encrypt_js_1 = require_encrypt2();
    var private_symbols_js_1 = require_private_symbols();
    var errors_js_1 = require_errors();
    var cek_js_1 = require_cek();
    var is_disjoint_js_1 = require_is_disjoint();
    var encrypt_key_management_js_1 = require_encrypt_key_management();
    var base64url_js_1 = require_base64url();
    var validate_crit_js_1 = require_validate_crit();
    var IndividualRecipient = class {
      parent;
      unprotectedHeader;
      key;
      options;
      constructor(enc, key, options) {
        this.parent = enc;
        this.key = key;
        this.options = options;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
      }
      addRecipient(...args) {
        return this.parent.addRecipient(...args);
      }
      encrypt(...args) {
        return this.parent.encrypt(...args);
      }
      done() {
        return this.parent;
      }
    };
    var GeneralEncrypt = class {
      _plaintext;
      _recipients = [];
      _protectedHeader;
      _unprotectedHeader;
      _aad;
      constructor(plaintext) {
        this._plaintext = plaintext;
      }
      addRecipient(key, options) {
        const recipient = new IndividualRecipient(this, key, { crit: options == null ? void 0 : options.crit });
        this._recipients.push(recipient);
        return recipient;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = sharedUnprotectedHeader;
        return this;
      }
      setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
      }
      async encrypt() {
        var _a, _b, _c;
        if (!this._recipients.length) {
          throw new errors_js_1.JWEInvalid("at least one recipient must be added");
        }
        if (this._recipients.length === 1) {
          const [recipient] = this._recipients;
          const flattened = await new encrypt_js_1.FlattenedEncrypt(this._plaintext).setAdditionalAuthenticatedData(this._aad).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).encrypt(recipient.key, { ...recipient.options });
          const jwe2 = {
            ciphertext: flattened.ciphertext,
            iv: flattened.iv,
            recipients: [{}],
            tag: flattened.tag
          };
          if (flattened.aad)
            jwe2.aad = flattened.aad;
          if (flattened.protected)
            jwe2.protected = flattened.protected;
          if (flattened.unprotected)
            jwe2.unprotected = flattened.unprotected;
          if (flattened.encrypted_key)
            jwe2.recipients[0].encrypted_key = flattened.encrypted_key;
          if (flattened.header)
            jwe2.recipients[0].header = flattened.header;
          return jwe2;
        }
        let enc;
        for (let i = 0; i < this._recipients.length; i++) {
          const recipient = this._recipients[i];
          if (!(0, is_disjoint_js_1.default)(this._protectedHeader, this._unprotectedHeader, recipient.unprotectedHeader)) {
            throw new errors_js_1.JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
          }
          const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...recipient.unprotectedHeader
          };
          const { alg } = joseHeader;
          if (typeof alg !== "string" || !alg) {
            throw new errors_js_1.JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
          }
          if (alg === "dir" || alg === "ECDH-ES") {
            throw new errors_js_1.JWEInvalid('"dir" and "ECDH-ES" alg may only be used with a single recipient');
          }
          if (typeof joseHeader.enc !== "string" || !joseHeader.enc) {
            throw new errors_js_1.JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
          }
          if (!enc) {
            enc = joseHeader.enc;
          } else if (enc !== joseHeader.enc) {
            throw new errors_js_1.JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients');
          }
          (0, validate_crit_js_1.default)(errors_js_1.JWEInvalid, /* @__PURE__ */ new Map(), recipient.options.crit, this._protectedHeader, joseHeader);
          if (joseHeader.zip !== void 0) {
            throw new errors_js_1.JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
          }
        }
        const cek = (0, cek_js_1.default)(enc);
        const jwe = {
          ciphertext: "",
          iv: "",
          recipients: [],
          tag: ""
        };
        for (let i = 0; i < this._recipients.length; i++) {
          const recipient = this._recipients[i];
          const target = {};
          jwe.recipients.push(target);
          const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...recipient.unprotectedHeader
          };
          const p2c = joseHeader.alg.startsWith("PBES2") ? 2048 + i : void 0;
          if (i === 0) {
            const flattened = await new encrypt_js_1.FlattenedEncrypt(this._plaintext).setAdditionalAuthenticatedData(this._aad).setContentEncryptionKey(cek).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).setKeyManagementParameters({ p2c }).encrypt(recipient.key, {
              ...recipient.options,
              [private_symbols_js_1.unprotected]: true
            });
            jwe.ciphertext = flattened.ciphertext;
            jwe.iv = flattened.iv;
            jwe.tag = flattened.tag;
            if (flattened.aad)
              jwe.aad = flattened.aad;
            if (flattened.protected)
              jwe.protected = flattened.protected;
            if (flattened.unprotected)
              jwe.unprotected = flattened.unprotected;
            target.encrypted_key = flattened.encrypted_key;
            if (flattened.header)
              target.header = flattened.header;
            continue;
          }
          const { encryptedKey, parameters } = await (0, encrypt_key_management_js_1.default)(((_a = recipient.unprotectedHeader) == null ? void 0 : _a.alg) || ((_b = this._protectedHeader) == null ? void 0 : _b.alg) || ((_c = this._unprotectedHeader) == null ? void 0 : _c.alg), enc, recipient.key, cek, { p2c });
          target.encrypted_key = (0, base64url_js_1.encode)(encryptedKey);
          if (recipient.unprotectedHeader || parameters)
            target.header = { ...recipient.unprotectedHeader, ...parameters };
        }
        return jwe;
      }
    };
    exports2.GeneralEncrypt = GeneralEncrypt;
  }
});

// node_modules/jose/dist/node/cjs/runtime/dsa_digest.js
var require_dsa_digest = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/dsa_digest.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = dsaDigest;
    var errors_js_1 = require_errors();
    function dsaDigest(alg) {
      switch (alg) {
        case "PS256":
        case "RS256":
        case "ES256":
        case "ES256K":
          return "sha256";
        case "PS384":
        case "RS384":
        case "ES384":
          return "sha384";
        case "PS512":
        case "RS512":
        case "ES512":
          return "sha512";
        case "Ed25519":
        case "EdDSA":
          return void 0;
        default:
          throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
      }
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/node_key.js
var require_node_key = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/node_key.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = keyForCrypto;
    var node_crypto_1 = require("node:crypto");
    var get_named_curve_js_1 = require_get_named_curve();
    var errors_js_1 = require_errors();
    var check_key_length_js_1 = require_check_key_length();
    var ecCurveAlgMap = /* @__PURE__ */ new Map([
      ["ES256", "P-256"],
      ["ES256K", "secp256k1"],
      ["ES384", "P-384"],
      ["ES512", "P-521"]
    ]);
    function keyForCrypto(alg, key) {
      let asymmetricKeyType;
      let asymmetricKeyDetails;
      let isJWK;
      if (key instanceof node_crypto_1.KeyObject) {
        asymmetricKeyType = key.asymmetricKeyType;
        asymmetricKeyDetails = key.asymmetricKeyDetails;
      } else {
        isJWK = true;
        switch (key.kty) {
          case "RSA":
            asymmetricKeyType = "rsa";
            break;
          case "EC":
            asymmetricKeyType = "ec";
            break;
          case "OKP": {
            if (key.crv === "Ed25519") {
              asymmetricKeyType = "ed25519";
              break;
            }
            if (key.crv === "Ed448") {
              asymmetricKeyType = "ed448";
              break;
            }
            throw new TypeError("Invalid key for this operation, its crv must be Ed25519 or Ed448");
          }
          default:
            throw new TypeError("Invalid key for this operation, its kty must be RSA, OKP, or EC");
        }
      }
      let options;
      switch (alg) {
        case "Ed25519":
          if (asymmetricKeyType !== "ed25519") {
            throw new TypeError(`Invalid key for this operation, its asymmetricKeyType must be ed25519`);
          }
          break;
        case "EdDSA":
          if (!["ed25519", "ed448"].includes(asymmetricKeyType)) {
            throw new TypeError("Invalid key for this operation, its asymmetricKeyType must be ed25519 or ed448");
          }
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          if (asymmetricKeyType !== "rsa") {
            throw new TypeError("Invalid key for this operation, its asymmetricKeyType must be rsa");
          }
          (0, check_key_length_js_1.default)(key, alg);
          break;
        case "PS256":
        case "PS384":
        case "PS512":
          if (asymmetricKeyType === "rsa-pss") {
            const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = asymmetricKeyDetails;
            const length = parseInt(alg.slice(-3), 10);
            if (hashAlgorithm !== void 0 && (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm)) {
              throw new TypeError(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${alg}`);
            }
            if (saltLength !== void 0 && saltLength > length >> 3) {
              throw new TypeError(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${alg}`);
            }
          } else if (asymmetricKeyType !== "rsa") {
            throw new TypeError("Invalid key for this operation, its asymmetricKeyType must be rsa or rsa-pss");
          }
          (0, check_key_length_js_1.default)(key, alg);
          options = {
            padding: node_crypto_1.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: node_crypto_1.constants.RSA_PSS_SALTLEN_DIGEST
          };
          break;
        case "ES256":
        case "ES256K":
        case "ES384":
        case "ES512": {
          if (asymmetricKeyType !== "ec") {
            throw new TypeError("Invalid key for this operation, its asymmetricKeyType must be ec");
          }
          const actual = (0, get_named_curve_js_1.default)(key);
          const expected = ecCurveAlgMap.get(alg);
          if (actual !== expected) {
            throw new TypeError(`Invalid key curve for the algorithm, its curve must be ${expected}, got ${actual}`);
          }
          options = { dsaEncoding: "ieee-p1363" };
          break;
        }
        default:
          throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
      }
      if (isJWK) {
        return { format: "jwk", key, ...options };
      }
      return options ? { ...options, key } : key;
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/hmac_digest.js
var require_hmac_digest = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/hmac_digest.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = hmacDigest;
    var errors_js_1 = require_errors();
    function hmacDigest(alg) {
      switch (alg) {
        case "HS256":
          return "sha256";
        case "HS384":
          return "sha384";
        case "HS512":
          return "sha512";
        default:
          throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
      }
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/get_sign_verify_key.js
var require_get_sign_verify_key = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/get_sign_verify_key.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = getSignVerifyKey;
    var node_crypto_1 = require("node:crypto");
    var webcrypto_js_1 = require_webcrypto();
    var crypto_key_js_1 = require_crypto_key();
    var invalid_key_input_js_1 = require_invalid_key_input();
    var is_key_like_js_1 = require_is_key_like();
    var jwk = require_is_jwk();
    function getSignVerifyKey(alg, key, usage) {
      if (key instanceof Uint8Array) {
        if (!alg.startsWith("HS")) {
          throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types));
        }
        return (0, node_crypto_1.createSecretKey)(key);
      }
      if (key instanceof node_crypto_1.KeyObject) {
        return key;
      }
      if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        (0, crypto_key_js_1.checkSigCryptoKey)(key, alg, usage);
        return node_crypto_1.KeyObject.from(key);
      }
      if (jwk.isJWK(key)) {
        if (alg.startsWith("HS")) {
          return (0, node_crypto_1.createSecretKey)(Buffer.from(key.k, "base64url"));
        }
        return key;
      }
      throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types, "Uint8Array", "JSON Web Key"));
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/sign.js
var require_sign = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/sign.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var crypto = require("node:crypto");
    var node_util_1 = require("node:util");
    var dsa_digest_js_1 = require_dsa_digest();
    var hmac_digest_js_1 = require_hmac_digest();
    var node_key_js_1 = require_node_key();
    var get_sign_verify_key_js_1 = require_get_sign_verify_key();
    var oneShotSign = (0, node_util_1.promisify)(crypto.sign);
    var sign = async (alg, key, data) => {
      const k = (0, get_sign_verify_key_js_1.default)(alg, key, "sign");
      if (alg.startsWith("HS")) {
        const hmac = crypto.createHmac((0, hmac_digest_js_1.default)(alg), k);
        hmac.update(data);
        return hmac.digest();
      }
      return oneShotSign((0, dsa_digest_js_1.default)(alg), data, (0, node_key_js_1.default)(alg, k));
    };
    exports2.default = sign;
  }
});

// node_modules/jose/dist/node/cjs/runtime/verify.js
var require_verify = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/verify.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var crypto = require("node:crypto");
    var node_util_1 = require("node:util");
    var dsa_digest_js_1 = require_dsa_digest();
    var node_key_js_1 = require_node_key();
    var sign_js_1 = require_sign();
    var get_sign_verify_key_js_1 = require_get_sign_verify_key();
    var oneShotVerify = (0, node_util_1.promisify)(crypto.verify);
    var verify = async (alg, key, signature, data) => {
      const k = (0, get_sign_verify_key_js_1.default)(alg, key, "verify");
      if (alg.startsWith("HS")) {
        const expected = await (0, sign_js_1.default)(alg, k, data);
        const actual = signature;
        try {
          return crypto.timingSafeEqual(actual, expected);
        } catch {
          return false;
        }
      }
      const algorithm = (0, dsa_digest_js_1.default)(alg);
      const keyInput = (0, node_key_js_1.default)(alg, k);
      try {
        return await oneShotVerify(algorithm, data, keyInput, signature);
      } catch {
        return false;
      }
    };
    exports2.default = verify;
  }
});

// node_modules/jose/dist/node/cjs/jws/flattened/verify.js
var require_verify2 = __commonJS({
  "node_modules/jose/dist/node/cjs/jws/flattened/verify.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.flattenedVerify = flattenedVerify;
    var base64url_js_1 = require_base64url();
    var verify_js_1 = require_verify();
    var errors_js_1 = require_errors();
    var buffer_utils_js_1 = require_buffer_utils();
    var is_disjoint_js_1 = require_is_disjoint();
    var is_object_js_1 = require_is_object();
    var check_key_type_js_1 = require_check_key_type();
    var validate_crit_js_1 = require_validate_crit();
    var validate_algorithms_js_1 = require_validate_algorithms();
    var is_jwk_js_1 = require_is_jwk();
    var import_js_1 = require_import();
    async function flattenedVerify(jws, key, options) {
      if (!(0, is_object_js_1.default)(jws)) {
        throw new errors_js_1.JWSInvalid("Flattened JWS must be an object");
      }
      if (jws.protected === void 0 && jws.header === void 0) {
        throw new errors_js_1.JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
      }
      if (jws.protected !== void 0 && typeof jws.protected !== "string") {
        throw new errors_js_1.JWSInvalid("JWS Protected Header incorrect type");
      }
      if (jws.payload === void 0) {
        throw new errors_js_1.JWSInvalid("JWS Payload missing");
      }
      if (typeof jws.signature !== "string") {
        throw new errors_js_1.JWSInvalid("JWS Signature missing or incorrect type");
      }
      if (jws.header !== void 0 && !(0, is_object_js_1.default)(jws.header)) {
        throw new errors_js_1.JWSInvalid("JWS Unprotected Header incorrect type");
      }
      let parsedProt = {};
      if (jws.protected) {
        try {
          const protectedHeader = (0, base64url_js_1.decode)(jws.protected);
          parsedProt = JSON.parse(buffer_utils_js_1.decoder.decode(protectedHeader));
        } catch {
          throw new errors_js_1.JWSInvalid("JWS Protected Header is invalid");
        }
      }
      if (!(0, is_disjoint_js_1.default)(parsedProt, jws.header)) {
        throw new errors_js_1.JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
      }
      const joseHeader = {
        ...parsedProt,
        ...jws.header
      };
      const extensions = (0, validate_crit_js_1.default)(errors_js_1.JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options == null ? void 0 : options.crit, parsedProt, joseHeader);
      let b64 = true;
      if (extensions.has("b64")) {
        b64 = parsedProt.b64;
        if (typeof b64 !== "boolean") {
          throw new errors_js_1.JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
      }
      const { alg } = joseHeader;
      if (typeof alg !== "string" || !alg) {
        throw new errors_js_1.JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
      }
      const algorithms = options && (0, validate_algorithms_js_1.default)("algorithms", options.algorithms);
      if (algorithms && !algorithms.has(alg)) {
        throw new errors_js_1.JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
      }
      if (b64) {
        if (typeof jws.payload !== "string") {
          throw new errors_js_1.JWSInvalid("JWS Payload must be a string");
        }
      } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
        throw new errors_js_1.JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
      }
      let resolvedKey = false;
      if (typeof key === "function") {
        key = await key(parsedProt, jws);
        resolvedKey = true;
        (0, check_key_type_js_1.checkKeyTypeWithJwk)(alg, key, "verify");
        if ((0, is_jwk_js_1.isJWK)(key)) {
          key = await (0, import_js_1.importJWK)(key, alg);
        }
      } else {
        (0, check_key_type_js_1.checkKeyTypeWithJwk)(alg, key, "verify");
      }
      const data = (0, buffer_utils_js_1.concat)(buffer_utils_js_1.encoder.encode(jws.protected ?? ""), buffer_utils_js_1.encoder.encode("."), typeof jws.payload === "string" ? buffer_utils_js_1.encoder.encode(jws.payload) : jws.payload);
      let signature;
      try {
        signature = (0, base64url_js_1.decode)(jws.signature);
      } catch {
        throw new errors_js_1.JWSInvalid("Failed to base64url decode the signature");
      }
      const verified = await (0, verify_js_1.default)(alg, key, signature, data);
      if (!verified) {
        throw new errors_js_1.JWSSignatureVerificationFailed();
      }
      let payload;
      if (b64) {
        try {
          payload = (0, base64url_js_1.decode)(jws.payload);
        } catch {
          throw new errors_js_1.JWSInvalid("Failed to base64url decode the payload");
        }
      } else if (typeof jws.payload === "string") {
        payload = buffer_utils_js_1.encoder.encode(jws.payload);
      } else {
        payload = jws.payload;
      }
      const result = { payload };
      if (jws.protected !== void 0) {
        result.protectedHeader = parsedProt;
      }
      if (jws.header !== void 0) {
        result.unprotectedHeader = jws.header;
      }
      if (resolvedKey) {
        return { ...result, key };
      }
      return result;
    }
  }
});

// node_modules/jose/dist/node/cjs/jws/compact/verify.js
var require_verify3 = __commonJS({
  "node_modules/jose/dist/node/cjs/jws/compact/verify.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.compactVerify = compactVerify;
    var verify_js_1 = require_verify2();
    var errors_js_1 = require_errors();
    var buffer_utils_js_1 = require_buffer_utils();
    async function compactVerify(jws, key, options) {
      if (jws instanceof Uint8Array) {
        jws = buffer_utils_js_1.decoder.decode(jws);
      }
      if (typeof jws !== "string") {
        throw new errors_js_1.JWSInvalid("Compact JWS must be a string or Uint8Array");
      }
      const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
      if (length !== 3) {
        throw new errors_js_1.JWSInvalid("Invalid Compact JWS");
      }
      const verified = await (0, verify_js_1.flattenedVerify)({ payload, protected: protectedHeader, signature }, key, options);
      const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
      if (typeof key === "function") {
        return { ...result, key: verified.key };
      }
      return result;
    }
  }
});

// node_modules/jose/dist/node/cjs/jws/general/verify.js
var require_verify4 = __commonJS({
  "node_modules/jose/dist/node/cjs/jws/general/verify.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generalVerify = generalVerify;
    var verify_js_1 = require_verify2();
    var errors_js_1 = require_errors();
    var is_object_js_1 = require_is_object();
    async function generalVerify(jws, key, options) {
      if (!(0, is_object_js_1.default)(jws)) {
        throw new errors_js_1.JWSInvalid("General JWS must be an object");
      }
      if (!Array.isArray(jws.signatures) || !jws.signatures.every(is_object_js_1.default)) {
        throw new errors_js_1.JWSInvalid("JWS Signatures missing or incorrect type");
      }
      for (const signature of jws.signatures) {
        try {
          return await (0, verify_js_1.flattenedVerify)({
            header: signature.header,
            payload: jws.payload,
            protected: signature.protected,
            signature: signature.signature
          }, key, options);
        } catch {
        }
      }
      throw new errors_js_1.JWSSignatureVerificationFailed();
    }
  }
});

// node_modules/jose/dist/node/cjs/lib/epoch.js
var require_epoch = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/epoch.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = (date) => Math.floor(date.getTime() / 1e3);
  }
});

// node_modules/jose/dist/node/cjs/lib/secs.js
var require_secs = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/secs.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var minute = 60;
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var year = day * 365.25;
    var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
    exports2.default = (str) => {
      const matched = REGEX.exec(str);
      if (!matched || matched[4] && matched[1]) {
        throw new TypeError("Invalid time period format");
      }
      const value = parseFloat(matched[2]);
      const unit = matched[3].toLowerCase();
      let numericDate;
      switch (unit) {
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
          numericDate = Math.round(value);
          break;
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
          numericDate = Math.round(value * minute);
          break;
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
          numericDate = Math.round(value * hour);
          break;
        case "day":
        case "days":
        case "d":
          numericDate = Math.round(value * day);
          break;
        case "week":
        case "weeks":
        case "w":
          numericDate = Math.round(value * week);
          break;
        default:
          numericDate = Math.round(value * year);
          break;
      }
      if (matched[1] === "-" || matched[4] === "ago") {
        return -numericDate;
      }
      return numericDate;
    };
  }
});

// node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js
var require_jwt_claims_set = __commonJS({
  "node_modules/jose/dist/node/cjs/lib/jwt_claims_set.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var errors_js_1 = require_errors();
    var buffer_utils_js_1 = require_buffer_utils();
    var epoch_js_1 = require_epoch();
    var secs_js_1 = require_secs();
    var is_object_js_1 = require_is_object();
    var normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, "");
    var checkAudiencePresence = (audPayload, audOption) => {
      if (typeof audPayload === "string") {
        return audOption.includes(audPayload);
      }
      if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
      }
      return false;
    };
    exports2.default = (protectedHeader, encodedPayload, options = {}) => {
      let payload;
      try {
        payload = JSON.parse(buffer_utils_js_1.decoder.decode(encodedPayload));
      } catch {
      }
      if (!(0, is_object_js_1.default)(payload)) {
        throw new errors_js_1.JWTInvalid("JWT Claims Set must be a top-level JSON object");
      }
      const { typ } = options;
      if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new errors_js_1.JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, "typ", "check_failed");
      }
      const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
      const presenceCheck = [...requiredClaims];
      if (maxTokenAge !== void 0)
        presenceCheck.push("iat");
      if (audience !== void 0)
        presenceCheck.push("aud");
      if (subject !== void 0)
        presenceCheck.push("sub");
      if (issuer !== void 0)
        presenceCheck.push("iss");
      for (const claim of new Set(presenceCheck.reverse())) {
        if (!(claim in payload)) {
          throw new errors_js_1.JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, "missing");
        }
      }
      if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
        throw new errors_js_1.JWTClaimValidationFailed('unexpected "iss" claim value', payload, "iss", "check_failed");
      }
      if (subject && payload.sub !== subject) {
        throw new errors_js_1.JWTClaimValidationFailed('unexpected "sub" claim value', payload, "sub", "check_failed");
      }
      if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
        throw new errors_js_1.JWTClaimValidationFailed('unexpected "aud" claim value', payload, "aud", "check_failed");
      }
      let tolerance;
      switch (typeof options.clockTolerance) {
        case "string":
          tolerance = (0, secs_js_1.default)(options.clockTolerance);
          break;
        case "number":
          tolerance = options.clockTolerance;
          break;
        case "undefined":
          tolerance = 0;
          break;
        default:
          throw new TypeError("Invalid clockTolerance option type");
      }
      const { currentDate } = options;
      const now = (0, epoch_js_1.default)(currentDate || /* @__PURE__ */ new Date());
      if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
        throw new errors_js_1.JWTClaimValidationFailed('"iat" claim must be a number', payload, "iat", "invalid");
      }
      if (payload.nbf !== void 0) {
        if (typeof payload.nbf !== "number") {
          throw new errors_js_1.JWTClaimValidationFailed('"nbf" claim must be a number', payload, "nbf", "invalid");
        }
        if (payload.nbf > now + tolerance) {
          throw new errors_js_1.JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, "nbf", "check_failed");
        }
      }
      if (payload.exp !== void 0) {
        if (typeof payload.exp !== "number") {
          throw new errors_js_1.JWTClaimValidationFailed('"exp" claim must be a number', payload, "exp", "invalid");
        }
        if (payload.exp <= now - tolerance) {
          throw new errors_js_1.JWTExpired('"exp" claim timestamp check failed', payload, "exp", "check_failed");
        }
      }
      if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === "number" ? maxTokenAge : (0, secs_js_1.default)(maxTokenAge);
        if (age - tolerance > max) {
          throw new errors_js_1.JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, "iat", "check_failed");
        }
        if (age < 0 - tolerance) {
          throw new errors_js_1.JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", "check_failed");
        }
      }
      return payload;
    };
  }
});

// node_modules/jose/dist/node/cjs/jwt/verify.js
var require_verify5 = __commonJS({
  "node_modules/jose/dist/node/cjs/jwt/verify.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.jwtVerify = jwtVerify;
    var verify_js_1 = require_verify3();
    var jwt_claims_set_js_1 = require_jwt_claims_set();
    var errors_js_1 = require_errors();
    async function jwtVerify(jwt, key, options) {
      var _a;
      const verified = await (0, verify_js_1.compactVerify)(jwt, key, options);
      if (((_a = verified.protectedHeader.crit) == null ? void 0 : _a.includes("b64")) && verified.protectedHeader.b64 === false) {
        throw new errors_js_1.JWTInvalid("JWTs MUST NOT use unencoded payload");
      }
      const payload = (0, jwt_claims_set_js_1.default)(verified.protectedHeader, verified.payload, options);
      const result = { payload, protectedHeader: verified.protectedHeader };
      if (typeof key === "function") {
        return { ...result, key: verified.key };
      }
      return result;
    }
  }
});

// node_modules/jose/dist/node/cjs/jwt/decrypt.js
var require_decrypt5 = __commonJS({
  "node_modules/jose/dist/node/cjs/jwt/decrypt.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.jwtDecrypt = jwtDecrypt;
    var decrypt_js_1 = require_decrypt3();
    var jwt_claims_set_js_1 = require_jwt_claims_set();
    var errors_js_1 = require_errors();
    async function jwtDecrypt(jwt, key, options) {
      const decrypted = await (0, decrypt_js_1.compactDecrypt)(jwt, key, options);
      const payload = (0, jwt_claims_set_js_1.default)(decrypted.protectedHeader, decrypted.plaintext, options);
      const { protectedHeader } = decrypted;
      if (protectedHeader.iss !== void 0 && protectedHeader.iss !== payload.iss) {
        throw new errors_js_1.JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', payload, "iss", "mismatch");
      }
      if (protectedHeader.sub !== void 0 && protectedHeader.sub !== payload.sub) {
        throw new errors_js_1.JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', payload, "sub", "mismatch");
      }
      if (protectedHeader.aud !== void 0 && JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)) {
        throw new errors_js_1.JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', payload, "aud", "mismatch");
      }
      const result = { payload, protectedHeader };
      if (typeof key === "function") {
        return { ...result, key: decrypted.key };
      }
      return result;
    }
  }
});

// node_modules/jose/dist/node/cjs/jwe/compact/encrypt.js
var require_encrypt4 = __commonJS({
  "node_modules/jose/dist/node/cjs/jwe/compact/encrypt.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CompactEncrypt = void 0;
    var encrypt_js_1 = require_encrypt2();
    var CompactEncrypt = class {
      _flattened;
      constructor(plaintext) {
        this._flattened = new encrypt_js_1.FlattenedEncrypt(plaintext);
      }
      setContentEncryptionKey(cek) {
        this._flattened.setContentEncryptionKey(cek);
        return this;
      }
      setInitializationVector(iv) {
        this._flattened.setInitializationVector(iv);
        return this;
      }
      setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
      }
      setKeyManagementParameters(parameters) {
        this._flattened.setKeyManagementParameters(parameters);
        return this;
      }
      async encrypt(key, options) {
        const jwe = await this._flattened.encrypt(key, options);
        return [jwe.protected, jwe.encrypted_key, jwe.iv, jwe.ciphertext, jwe.tag].join(".");
      }
    };
    exports2.CompactEncrypt = CompactEncrypt;
  }
});

// node_modules/jose/dist/node/cjs/jws/flattened/sign.js
var require_sign2 = __commonJS({
  "node_modules/jose/dist/node/cjs/jws/flattened/sign.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FlattenedSign = void 0;
    var base64url_js_1 = require_base64url();
    var sign_js_1 = require_sign();
    var is_disjoint_js_1 = require_is_disjoint();
    var errors_js_1 = require_errors();
    var buffer_utils_js_1 = require_buffer_utils();
    var check_key_type_js_1 = require_check_key_type();
    var validate_crit_js_1 = require_validate_crit();
    var FlattenedSign = class {
      _payload;
      _protectedHeader;
      _unprotectedHeader;
      constructor(payload) {
        if (!(payload instanceof Uint8Array)) {
          throw new TypeError("payload must be an instance of Uint8Array");
        }
        this._payload = payload;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
      }
      async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
          throw new errors_js_1.JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
        }
        if (!(0, is_disjoint_js_1.default)(this._protectedHeader, this._unprotectedHeader)) {
          throw new errors_js_1.JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
        }
        const joseHeader = {
          ...this._protectedHeader,
          ...this._unprotectedHeader
        };
        const extensions = (0, validate_crit_js_1.default)(errors_js_1.JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options == null ? void 0 : options.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has("b64")) {
          b64 = this._protectedHeader.b64;
          if (typeof b64 !== "boolean") {
            throw new errors_js_1.JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
          }
        }
        const { alg } = joseHeader;
        if (typeof alg !== "string" || !alg) {
          throw new errors_js_1.JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        (0, check_key_type_js_1.checkKeyTypeWithJwk)(alg, key, "sign");
        let payload = this._payload;
        if (b64) {
          payload = buffer_utils_js_1.encoder.encode((0, base64url_js_1.encode)(payload));
        }
        let protectedHeader;
        if (this._protectedHeader) {
          protectedHeader = buffer_utils_js_1.encoder.encode((0, base64url_js_1.encode)(JSON.stringify(this._protectedHeader)));
        } else {
          protectedHeader = buffer_utils_js_1.encoder.encode("");
        }
        const data = (0, buffer_utils_js_1.concat)(protectedHeader, buffer_utils_js_1.encoder.encode("."), payload);
        const signature = await (0, sign_js_1.default)(alg, key, data);
        const jws = {
          signature: (0, base64url_js_1.encode)(signature),
          payload: ""
        };
        if (b64) {
          jws.payload = buffer_utils_js_1.decoder.decode(payload);
        }
        if (this._unprotectedHeader) {
          jws.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
          jws.protected = buffer_utils_js_1.decoder.decode(protectedHeader);
        }
        return jws;
      }
    };
    exports2.FlattenedSign = FlattenedSign;
  }
});

// node_modules/jose/dist/node/cjs/jws/compact/sign.js
var require_sign3 = __commonJS({
  "node_modules/jose/dist/node/cjs/jws/compact/sign.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CompactSign = void 0;
    var sign_js_1 = require_sign2();
    var CompactSign = class {
      _flattened;
      constructor(payload) {
        this._flattened = new sign_js_1.FlattenedSign(payload);
      }
      setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
      }
      async sign(key, options) {
        const jws = await this._flattened.sign(key, options);
        if (jws.payload === void 0) {
          throw new TypeError("use the flattened module for creating JWS with b64: false");
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
      }
    };
    exports2.CompactSign = CompactSign;
  }
});

// node_modules/jose/dist/node/cjs/jws/general/sign.js
var require_sign4 = __commonJS({
  "node_modules/jose/dist/node/cjs/jws/general/sign.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.GeneralSign = void 0;
    var sign_js_1 = require_sign2();
    var errors_js_1 = require_errors();
    var IndividualSignature = class {
      parent;
      protectedHeader;
      unprotectedHeader;
      options;
      key;
      constructor(sig, key, options) {
        this.parent = sig;
        this.key = key;
        this.options = options;
      }
      setProtectedHeader(protectedHeader) {
        if (this.protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this.protectedHeader = protectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
      }
      addSignature(...args) {
        return this.parent.addSignature(...args);
      }
      sign(...args) {
        return this.parent.sign(...args);
      }
      done() {
        return this.parent;
      }
    };
    var GeneralSign = class {
      _payload;
      _signatures = [];
      constructor(payload) {
        this._payload = payload;
      }
      addSignature(key, options) {
        const signature = new IndividualSignature(this, key, options);
        this._signatures.push(signature);
        return signature;
      }
      async sign() {
        if (!this._signatures.length) {
          throw new errors_js_1.JWSInvalid("at least one signature must be added");
        }
        const jws = {
          signatures: [],
          payload: ""
        };
        for (let i = 0; i < this._signatures.length; i++) {
          const signature = this._signatures[i];
          const flattened = new sign_js_1.FlattenedSign(this._payload);
          flattened.setProtectedHeader(signature.protectedHeader);
          flattened.setUnprotectedHeader(signature.unprotectedHeader);
          const { payload, ...rest } = await flattened.sign(signature.key, signature.options);
          if (i === 0) {
            jws.payload = payload;
          } else if (jws.payload !== payload) {
            throw new errors_js_1.JWSInvalid("inconsistent use of JWS Unencoded Payload (RFC7797)");
          }
          jws.signatures.push(rest);
        }
        return jws;
      }
    };
    exports2.GeneralSign = GeneralSign;
  }
});

// node_modules/jose/dist/node/cjs/jwt/produce.js
var require_produce = __commonJS({
  "node_modules/jose/dist/node/cjs/jwt/produce.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProduceJWT = void 0;
    var epoch_js_1 = require_epoch();
    var is_object_js_1 = require_is_object();
    var secs_js_1 = require_secs();
    function validateInput(label, input) {
      if (!Number.isFinite(input)) {
        throw new TypeError(`Invalid ${label} input`);
      }
      return input;
    }
    var ProduceJWT = class {
      _payload;
      constructor(payload = {}) {
        if (!(0, is_object_js_1.default)(payload)) {
          throw new TypeError("JWT Claims Set MUST be an object");
        }
        this._payload = payload;
      }
      setIssuer(issuer) {
        this._payload = { ...this._payload, iss: issuer };
        return this;
      }
      setSubject(subject) {
        this._payload = { ...this._payload, sub: subject };
        return this;
      }
      setAudience(audience) {
        this._payload = { ...this._payload, aud: audience };
        return this;
      }
      setJti(jwtId) {
        this._payload = { ...this._payload, jti: jwtId };
        return this;
      }
      setNotBefore(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, nbf: validateInput("setNotBefore", input) };
        } else if (input instanceof Date) {
          this._payload = { ...this._payload, nbf: validateInput("setNotBefore", (0, epoch_js_1.default)(input)) };
        } else {
          this._payload = { ...this._payload, nbf: (0, epoch_js_1.default)(/* @__PURE__ */ new Date()) + (0, secs_js_1.default)(input) };
        }
        return this;
      }
      setExpirationTime(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, exp: validateInput("setExpirationTime", input) };
        } else if (input instanceof Date) {
          this._payload = { ...this._payload, exp: validateInput("setExpirationTime", (0, epoch_js_1.default)(input)) };
        } else {
          this._payload = { ...this._payload, exp: (0, epoch_js_1.default)(/* @__PURE__ */ new Date()) + (0, secs_js_1.default)(input) };
        }
        return this;
      }
      setIssuedAt(input) {
        if (typeof input === "undefined") {
          this._payload = { ...this._payload, iat: (0, epoch_js_1.default)(/* @__PURE__ */ new Date()) };
        } else if (input instanceof Date) {
          this._payload = { ...this._payload, iat: validateInput("setIssuedAt", (0, epoch_js_1.default)(input)) };
        } else if (typeof input === "string") {
          this._payload = {
            ...this._payload,
            iat: validateInput("setIssuedAt", (0, epoch_js_1.default)(/* @__PURE__ */ new Date()) + (0, secs_js_1.default)(input))
          };
        } else {
          this._payload = { ...this._payload, iat: validateInput("setIssuedAt", input) };
        }
        return this;
      }
    };
    exports2.ProduceJWT = ProduceJWT;
  }
});

// node_modules/jose/dist/node/cjs/jwt/sign.js
var require_sign5 = __commonJS({
  "node_modules/jose/dist/node/cjs/jwt/sign.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SignJWT = void 0;
    var sign_js_1 = require_sign3();
    var errors_js_1 = require_errors();
    var buffer_utils_js_1 = require_buffer_utils();
    var produce_js_1 = require_produce();
    var SignJWT = class extends produce_js_1.ProduceJWT {
      _protectedHeader;
      setProtectedHeader(protectedHeader) {
        this._protectedHeader = protectedHeader;
        return this;
      }
      async sign(key, options) {
        var _a;
        const sig = new sign_js_1.CompactSign(buffer_utils_js_1.encoder.encode(JSON.stringify(this._payload)));
        sig.setProtectedHeader(this._protectedHeader);
        if (Array.isArray((_a = this._protectedHeader) == null ? void 0 : _a.crit) && this._protectedHeader.crit.includes("b64") && this._protectedHeader.b64 === false) {
          throw new errors_js_1.JWTInvalid("JWTs MUST NOT use unencoded payload");
        }
        return sig.sign(key, options);
      }
    };
    exports2.SignJWT = SignJWT;
  }
});

// node_modules/jose/dist/node/cjs/jwt/encrypt.js
var require_encrypt5 = __commonJS({
  "node_modules/jose/dist/node/cjs/jwt/encrypt.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EncryptJWT = void 0;
    var encrypt_js_1 = require_encrypt4();
    var buffer_utils_js_1 = require_buffer_utils();
    var produce_js_1 = require_produce();
    var EncryptJWT = class extends produce_js_1.ProduceJWT {
      _cek;
      _iv;
      _keyManagementParameters;
      _protectedHeader;
      _replicateIssuerAsHeader;
      _replicateSubjectAsHeader;
      _replicateAudienceAsHeader;
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      replicateIssuerAsHeader() {
        this._replicateIssuerAsHeader = true;
        return this;
      }
      replicateSubjectAsHeader() {
        this._replicateSubjectAsHeader = true;
        return this;
      }
      replicateAudienceAsHeader() {
        this._replicateAudienceAsHeader = true;
        return this;
      }
      async encrypt(key, options) {
        const enc = new encrypt_js_1.CompactEncrypt(buffer_utils_js_1.encoder.encode(JSON.stringify(this._payload)));
        if (this._replicateIssuerAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, iss: this._payload.iss };
        }
        if (this._replicateSubjectAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, sub: this._payload.sub };
        }
        if (this._replicateAudienceAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, aud: this._payload.aud };
        }
        enc.setProtectedHeader(this._protectedHeader);
        if (this._iv) {
          enc.setInitializationVector(this._iv);
        }
        if (this._cek) {
          enc.setContentEncryptionKey(this._cek);
        }
        if (this._keyManagementParameters) {
          enc.setKeyManagementParameters(this._keyManagementParameters);
        }
        return enc.encrypt(key, options);
      }
    };
    exports2.EncryptJWT = EncryptJWT;
  }
});

// node_modules/jose/dist/node/cjs/jwk/thumbprint.js
var require_thumbprint = __commonJS({
  "node_modules/jose/dist/node/cjs/jwk/thumbprint.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.calculateJwkThumbprint = calculateJwkThumbprint;
    exports2.calculateJwkThumbprintUri = calculateJwkThumbprintUri;
    var digest_js_1 = require_digest();
    var base64url_js_1 = require_base64url();
    var errors_js_1 = require_errors();
    var buffer_utils_js_1 = require_buffer_utils();
    var is_object_js_1 = require_is_object();
    var check = (value, description) => {
      if (typeof value !== "string" || !value) {
        throw new errors_js_1.JWKInvalid(`${description} missing or invalid`);
      }
    };
    async function calculateJwkThumbprint(jwk, digestAlgorithm) {
      if (!(0, is_object_js_1.default)(jwk)) {
        throw new TypeError("JWK must be an object");
      }
      digestAlgorithm ??= "sha256";
      if (digestAlgorithm !== "sha256" && digestAlgorithm !== "sha384" && digestAlgorithm !== "sha512") {
        throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
      }
      let components;
      switch (jwk.kty) {
        case "EC":
          check(jwk.crv, '"crv" (Curve) Parameter');
          check(jwk.x, '"x" (X Coordinate) Parameter');
          check(jwk.y, '"y" (Y Coordinate) Parameter');
          components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x, y: jwk.y };
          break;
        case "OKP":
          check(jwk.crv, '"crv" (Subtype of Key Pair) Parameter');
          check(jwk.x, '"x" (Public Key) Parameter');
          components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x };
          break;
        case "RSA":
          check(jwk.e, '"e" (Exponent) Parameter');
          check(jwk.n, '"n" (Modulus) Parameter');
          components = { e: jwk.e, kty: jwk.kty, n: jwk.n };
          break;
        case "oct":
          check(jwk.k, '"k" (Key Value) Parameter');
          components = { k: jwk.k, kty: jwk.kty };
          break;
        default:
          throw new errors_js_1.JOSENotSupported('"kty" (Key Type) Parameter missing or unsupported');
      }
      const data = buffer_utils_js_1.encoder.encode(JSON.stringify(components));
      return (0, base64url_js_1.encode)(await (0, digest_js_1.default)(digestAlgorithm, data));
    }
    async function calculateJwkThumbprintUri(jwk, digestAlgorithm) {
      digestAlgorithm ??= "sha256";
      const thumbprint = await calculateJwkThumbprint(jwk, digestAlgorithm);
      return `urn:ietf:params:oauth:jwk-thumbprint:sha-${digestAlgorithm.slice(-3)}:${thumbprint}`;
    }
  }
});

// node_modules/jose/dist/node/cjs/jwk/embedded.js
var require_embedded = __commonJS({
  "node_modules/jose/dist/node/cjs/jwk/embedded.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EmbeddedJWK = EmbeddedJWK;
    var import_js_1 = require_import();
    var is_object_js_1 = require_is_object();
    var errors_js_1 = require_errors();
    async function EmbeddedJWK(protectedHeader, token) {
      const joseHeader = {
        ...protectedHeader,
        ...token == null ? void 0 : token.header
      };
      if (!(0, is_object_js_1.default)(joseHeader.jwk)) {
        throw new errors_js_1.JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
      }
      const key = await (0, import_js_1.importJWK)({ ...joseHeader.jwk, ext: true }, joseHeader.alg);
      if (key instanceof Uint8Array || key.type !== "public") {
        throw new errors_js_1.JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a public key');
      }
      return key;
    }
  }
});

// node_modules/jose/dist/node/cjs/jwks/local.js
var require_local = __commonJS({
  "node_modules/jose/dist/node/cjs/jwks/local.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createLocalJWKSet = createLocalJWKSet;
    var import_js_1 = require_import();
    var errors_js_1 = require_errors();
    var is_object_js_1 = require_is_object();
    function getKtyFromAlg(alg) {
      switch (typeof alg === "string" && alg.slice(0, 2)) {
        case "RS":
        case "PS":
          return "RSA";
        case "ES":
          return "EC";
        case "Ed":
          return "OKP";
        default:
          throw new errors_js_1.JOSENotSupported('Unsupported "alg" value for a JSON Web Key Set');
      }
    }
    function isJWKSLike(jwks) {
      return jwks && typeof jwks === "object" && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
    }
    function isJWKLike(key) {
      return (0, is_object_js_1.default)(key);
    }
    function clone(obj) {
      if (typeof structuredClone === "function") {
        return structuredClone(obj);
      }
      return JSON.parse(JSON.stringify(obj));
    }
    var LocalJWKSet = class {
      _jwks;
      _cached = /* @__PURE__ */ new WeakMap();
      constructor(jwks) {
        if (!isJWKSLike(jwks)) {
          throw new errors_js_1.JWKSInvalid("JSON Web Key Set malformed");
        }
        this._jwks = clone(jwks);
      }
      async getKey(protectedHeader, token) {
        const { alg, kid } = { ...protectedHeader, ...token == null ? void 0 : token.header };
        const kty = getKtyFromAlg(alg);
        const candidates = this._jwks.keys.filter((jwk2) => {
          let candidate = kty === jwk2.kty;
          if (candidate && typeof kid === "string") {
            candidate = kid === jwk2.kid;
          }
          if (candidate && typeof jwk2.alg === "string") {
            candidate = alg === jwk2.alg;
          }
          if (candidate && typeof jwk2.use === "string") {
            candidate = jwk2.use === "sig";
          }
          if (candidate && Array.isArray(jwk2.key_ops)) {
            candidate = jwk2.key_ops.includes("verify");
          }
          if (candidate) {
            switch (alg) {
              case "ES256":
                candidate = jwk2.crv === "P-256";
                break;
              case "ES256K":
                candidate = jwk2.crv === "secp256k1";
                break;
              case "ES384":
                candidate = jwk2.crv === "P-384";
                break;
              case "ES512":
                candidate = jwk2.crv === "P-521";
                break;
              case "Ed25519":
                candidate = jwk2.crv === "Ed25519";
                break;
              case "EdDSA":
                candidate = jwk2.crv === "Ed25519" || jwk2.crv === "Ed448";
                break;
            }
          }
          return candidate;
        });
        const { 0: jwk, length } = candidates;
        if (length === 0) {
          throw new errors_js_1.JWKSNoMatchingKey();
        }
        if (length !== 1) {
          const error = new errors_js_1.JWKSMultipleMatchingKeys();
          const { _cached } = this;
          error[Symbol.asyncIterator] = async function* () {
            for (const jwk2 of candidates) {
              try {
                yield await importWithAlgCache(_cached, jwk2, alg);
              } catch {
              }
            }
          };
          throw error;
        }
        return importWithAlgCache(this._cached, jwk, alg);
      }
    };
    async function importWithAlgCache(cache, jwk, alg) {
      const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
      if (cached[alg] === void 0) {
        const key = await (0, import_js_1.importJWK)({ ...jwk, ext: true }, alg);
        if (key instanceof Uint8Array || key.type !== "public") {
          throw new errors_js_1.JWKSInvalid("JSON Web Key Set members must be public keys");
        }
        cached[alg] = key;
      }
      return cached[alg];
    }
    function createLocalJWKSet(jwks) {
      const set = new LocalJWKSet(jwks);
      const localJWKSet = async (protectedHeader, token) => set.getKey(protectedHeader, token);
      Object.defineProperties(localJWKSet, {
        jwks: {
          value: () => clone(set._jwks),
          enumerable: true,
          configurable: false,
          writable: false
        }
      });
      return localJWKSet;
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/fetch_jwks.js
var require_fetch_jwks = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/fetch_jwks.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var http = require("node:http");
    var https = require("node:https");
    var node_events_1 = require("node:events");
    var errors_js_1 = require_errors();
    var buffer_utils_js_1 = require_buffer_utils();
    var fetchJwks = async (url, timeout, options) => {
      let get;
      switch (url.protocol) {
        case "https:":
          get = https.get;
          break;
        case "http:":
          get = http.get;
          break;
        default:
          throw new TypeError("Unsupported URL protocol.");
      }
      const { agent, headers } = options;
      const req = get(url.href, {
        agent,
        timeout,
        headers
      });
      const [response] = await Promise.race([(0, node_events_1.once)(req, "response"), (0, node_events_1.once)(req, "timeout")]);
      if (!response) {
        req.destroy();
        throw new errors_js_1.JWKSTimeout();
      }
      if (response.statusCode !== 200) {
        throw new errors_js_1.JOSEError("Expected 200 OK from the JSON Web Key Set HTTP response");
      }
      const parts = [];
      for await (const part of response) {
        parts.push(part);
      }
      try {
        return JSON.parse(buffer_utils_js_1.decoder.decode((0, buffer_utils_js_1.concat)(...parts)));
      } catch {
        throw new errors_js_1.JOSEError("Failed to parse the JSON Web Key Set HTTP response as JSON");
      }
    };
    exports2.default = fetchJwks;
  }
});

// node_modules/jose/dist/node/cjs/jwks/remote.js
var require_remote = __commonJS({
  "node_modules/jose/dist/node/cjs/jwks/remote.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.experimental_jwksCache = exports2.jwksCache = void 0;
    exports2.createRemoteJWKSet = createRemoteJWKSet;
    var fetch_jwks_js_1 = require_fetch_jwks();
    var errors_js_1 = require_errors();
    var local_js_1 = require_local();
    var is_object_js_1 = require_is_object();
    function isCloudflareWorkers() {
      return typeof WebSocketPair !== "undefined" || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" || typeof EdgeRuntime !== "undefined" && EdgeRuntime === "vercel";
    }
    var USER_AGENT;
    var _a, _b;
    if (typeof navigator === "undefined" || !((_b = (_a = navigator.userAgent) == null ? void 0 : _a.startsWith) == null ? void 0 : _b.call(_a, "Mozilla/5.0 "))) {
      const NAME = "jose";
      const VERSION = "v5.10.0";
      USER_AGENT = `${NAME}/${VERSION}`;
    }
    exports2.jwksCache = /* @__PURE__ */ Symbol();
    function isFreshJwksCache(input, cacheMaxAge) {
      if (typeof input !== "object" || input === null) {
        return false;
      }
      if (!("uat" in input) || typeof input.uat !== "number" || Date.now() - input.uat >= cacheMaxAge) {
        return false;
      }
      if (!("jwks" in input) || !(0, is_object_js_1.default)(input.jwks) || !Array.isArray(input.jwks.keys) || !Array.prototype.every.call(input.jwks.keys, is_object_js_1.default)) {
        return false;
      }
      return true;
    }
    var RemoteJWKSet = class {
      _url;
      _timeoutDuration;
      _cooldownDuration;
      _cacheMaxAge;
      _jwksTimestamp;
      _pendingFetch;
      _options;
      _local;
      _cache;
      constructor(url, options) {
        if (!(url instanceof URL)) {
          throw new TypeError("url must be an instance of URL");
        }
        this._url = new URL(url.href);
        this._options = { agent: options == null ? void 0 : options.agent, headers: options == null ? void 0 : options.headers };
        this._timeoutDuration = typeof (options == null ? void 0 : options.timeoutDuration) === "number" ? options == null ? void 0 : options.timeoutDuration : 5e3;
        this._cooldownDuration = typeof (options == null ? void 0 : options.cooldownDuration) === "number" ? options == null ? void 0 : options.cooldownDuration : 3e4;
        this._cacheMaxAge = typeof (options == null ? void 0 : options.cacheMaxAge) === "number" ? options == null ? void 0 : options.cacheMaxAge : 6e5;
        if ((options == null ? void 0 : options[exports2.jwksCache]) !== void 0) {
          this._cache = options == null ? void 0 : options[exports2.jwksCache];
          if (isFreshJwksCache(options == null ? void 0 : options[exports2.jwksCache], this._cacheMaxAge)) {
            this._jwksTimestamp = this._cache.uat;
            this._local = (0, local_js_1.createLocalJWKSet)(this._cache.jwks);
          }
        }
      }
      coolingDown() {
        return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cooldownDuration : false;
      }
      fresh() {
        return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cacheMaxAge : false;
      }
      async getKey(protectedHeader, token) {
        if (!this._local || !this.fresh()) {
          await this.reload();
        }
        try {
          return await this._local(protectedHeader, token);
        } catch (err) {
          if (err instanceof errors_js_1.JWKSNoMatchingKey) {
            if (this.coolingDown() === false) {
              await this.reload();
              return this._local(protectedHeader, token);
            }
          }
          throw err;
        }
      }
      async reload() {
        if (this._pendingFetch && isCloudflareWorkers()) {
          this._pendingFetch = void 0;
        }
        const headers = new Headers(this._options.headers);
        if (USER_AGENT && !headers.has("User-Agent")) {
          headers.set("User-Agent", USER_AGENT);
          this._options.headers = Object.fromEntries(headers.entries());
        }
        this._pendingFetch ||= (0, fetch_jwks_js_1.default)(this._url, this._timeoutDuration, this._options).then((json) => {
          this._local = (0, local_js_1.createLocalJWKSet)(json);
          if (this._cache) {
            this._cache.uat = Date.now();
            this._cache.jwks = json;
          }
          this._jwksTimestamp = Date.now();
          this._pendingFetch = void 0;
        }).catch((err) => {
          this._pendingFetch = void 0;
          throw err;
        });
        await this._pendingFetch;
      }
    };
    function createRemoteJWKSet(url, options) {
      const set = new RemoteJWKSet(url, options);
      const remoteJWKSet = async (protectedHeader, token) => set.getKey(protectedHeader, token);
      Object.defineProperties(remoteJWKSet, {
        coolingDown: {
          get: () => set.coolingDown(),
          enumerable: true,
          configurable: false
        },
        fresh: {
          get: () => set.fresh(),
          enumerable: true,
          configurable: false
        },
        reload: {
          value: () => set.reload(),
          enumerable: true,
          configurable: false,
          writable: false
        },
        reloading: {
          get: () => !!set._pendingFetch,
          enumerable: true,
          configurable: false
        },
        jwks: {
          value: () => {
            var _a2;
            return (_a2 = set._local) == null ? void 0 : _a2.jwks();
          },
          enumerable: true,
          configurable: false,
          writable: false
        }
      });
      return remoteJWKSet;
    }
    exports2.experimental_jwksCache = exports2.jwksCache;
  }
});

// node_modules/jose/dist/node/cjs/jwt/unsecured.js
var require_unsecured = __commonJS({
  "node_modules/jose/dist/node/cjs/jwt/unsecured.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UnsecuredJWT = void 0;
    var base64url = require_base64url();
    var buffer_utils_js_1 = require_buffer_utils();
    var errors_js_1 = require_errors();
    var jwt_claims_set_js_1 = require_jwt_claims_set();
    var produce_js_1 = require_produce();
    var UnsecuredJWT = class extends produce_js_1.ProduceJWT {
      encode() {
        const header = base64url.encode(JSON.stringify({ alg: "none" }));
        const payload = base64url.encode(JSON.stringify(this._payload));
        return `${header}.${payload}.`;
      }
      static decode(jwt, options) {
        if (typeof jwt !== "string") {
          throw new errors_js_1.JWTInvalid("Unsecured JWT must be a string");
        }
        const { 0: encodedHeader, 1: encodedPayload, 2: signature, length } = jwt.split(".");
        if (length !== 3 || signature !== "") {
          throw new errors_js_1.JWTInvalid("Invalid Unsecured JWT");
        }
        let header;
        try {
          header = JSON.parse(buffer_utils_js_1.decoder.decode(base64url.decode(encodedHeader)));
          if (header.alg !== "none")
            throw new Error();
        } catch {
          throw new errors_js_1.JWTInvalid("Invalid Unsecured JWT");
        }
        const payload = (0, jwt_claims_set_js_1.default)(header, base64url.decode(encodedPayload), options);
        return { payload, header };
      }
    };
    exports2.UnsecuredJWT = UnsecuredJWT;
  }
});

// node_modules/jose/dist/node/cjs/util/base64url.js
var require_base64url2 = __commonJS({
  "node_modules/jose/dist/node/cjs/util/base64url.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decode = exports2.encode = void 0;
    var base64url = require_base64url();
    exports2.encode = base64url.encode;
    exports2.decode = base64url.decode;
  }
});

// node_modules/jose/dist/node/cjs/util/decode_protected_header.js
var require_decode_protected_header = __commonJS({
  "node_modules/jose/dist/node/cjs/util/decode_protected_header.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decodeProtectedHeader = decodeProtectedHeader;
    var base64url_js_1 = require_base64url2();
    var buffer_utils_js_1 = require_buffer_utils();
    var is_object_js_1 = require_is_object();
    function decodeProtectedHeader(token) {
      let protectedB64u;
      if (typeof token === "string") {
        const parts = token.split(".");
        if (parts.length === 3 || parts.length === 5) {
          ;
          [protectedB64u] = parts;
        }
      } else if (typeof token === "object" && token) {
        if ("protected" in token) {
          protectedB64u = token.protected;
        } else {
          throw new TypeError("Token does not contain a Protected Header");
        }
      }
      try {
        if (typeof protectedB64u !== "string" || !protectedB64u) {
          throw new Error();
        }
        const result = JSON.parse(buffer_utils_js_1.decoder.decode((0, base64url_js_1.decode)(protectedB64u)));
        if (!(0, is_object_js_1.default)(result)) {
          throw new Error();
        }
        return result;
      } catch {
        throw new TypeError("Invalid Token or Protected Header formatting");
      }
    }
  }
});

// node_modules/jose/dist/node/cjs/util/decode_jwt.js
var require_decode_jwt = __commonJS({
  "node_modules/jose/dist/node/cjs/util/decode_jwt.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decodeJwt = decodeJwt;
    var base64url_js_1 = require_base64url2();
    var buffer_utils_js_1 = require_buffer_utils();
    var is_object_js_1 = require_is_object();
    var errors_js_1 = require_errors();
    function decodeJwt(jwt) {
      if (typeof jwt !== "string")
        throw new errors_js_1.JWTInvalid("JWTs must use Compact JWS serialization, JWT must be a string");
      const { 1: payload, length } = jwt.split(".");
      if (length === 5)
        throw new errors_js_1.JWTInvalid("Only JWTs using Compact JWS serialization can be decoded");
      if (length !== 3)
        throw new errors_js_1.JWTInvalid("Invalid JWT");
      if (!payload)
        throw new errors_js_1.JWTInvalid("JWTs must contain a payload");
      let decoded;
      try {
        decoded = (0, base64url_js_1.decode)(payload);
      } catch {
        throw new errors_js_1.JWTInvalid("Failed to base64url decode the payload");
      }
      let result;
      try {
        result = JSON.parse(buffer_utils_js_1.decoder.decode(decoded));
      } catch {
        throw new errors_js_1.JWTInvalid("Failed to parse the decoded payload as JSON");
      }
      if (!(0, is_object_js_1.default)(result))
        throw new errors_js_1.JWTInvalid("Invalid JWT Claims Set");
      return result;
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/generate.js
var require_generate = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/generate.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generateSecret = generateSecret;
    exports2.generateKeyPair = generateKeyPair;
    var node_crypto_1 = require("node:crypto");
    var node_util_1 = require("node:util");
    var random_js_1 = require_random();
    var errors_js_1 = require_errors();
    var generate = (0, node_util_1.promisify)(node_crypto_1.generateKeyPair);
    async function generateSecret(alg, options) {
      let length;
      switch (alg) {
        case "HS256":
        case "HS384":
        case "HS512":
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          length = parseInt(alg.slice(-3), 10);
          break;
        case "A128KW":
        case "A192KW":
        case "A256KW":
        case "A128GCMKW":
        case "A192GCMKW":
        case "A256GCMKW":
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          length = parseInt(alg.slice(1, 4), 10);
          break;
        default:
          throw new errors_js_1.JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      return (0, node_crypto_1.createSecretKey)((0, random_js_1.default)(new Uint8Array(length >> 3)));
    }
    async function generateKeyPair(alg, options) {
      switch (alg) {
        case "RS256":
        case "RS384":
        case "RS512":
        case "PS256":
        case "PS384":
        case "PS512":
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
        case "RSA1_5": {
          const modulusLength = (options == null ? void 0 : options.modulusLength) ?? 2048;
          if (typeof modulusLength !== "number" || modulusLength < 2048) {
            throw new errors_js_1.JOSENotSupported("Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used");
          }
          const keypair = await generate("rsa", {
            modulusLength,
            publicExponent: 65537
          });
          return keypair;
        }
        case "ES256":
          return generate("ec", { namedCurve: "P-256" });
        case "ES256K":
          return generate("ec", { namedCurve: "secp256k1" });
        case "ES384":
          return generate("ec", { namedCurve: "P-384" });
        case "ES512":
          return generate("ec", { namedCurve: "P-521" });
        case "Ed25519":
          return generate("ed25519");
        case "EdDSA": {
          switch (options == null ? void 0 : options.crv) {
            case void 0:
            case "Ed25519":
              return generate("ed25519");
            case "Ed448":
              return generate("ed448");
            default:
              throw new errors_js_1.JOSENotSupported("Invalid or unsupported crv option provided, supported values are Ed25519 and Ed448");
          }
        }
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW": {
          const crv = (options == null ? void 0 : options.crv) ?? "P-256";
          switch (crv) {
            case void 0:
            case "P-256":
            case "P-384":
            case "P-521":
              return generate("ec", { namedCurve: crv });
            case "X25519":
              return generate("x25519");
            case "X448":
              return generate("x448");
            default:
              throw new errors_js_1.JOSENotSupported("Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448");
          }
        }
        default:
          throw new errors_js_1.JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
    }
  }
});

// node_modules/jose/dist/node/cjs/key/generate_key_pair.js
var require_generate_key_pair = __commonJS({
  "node_modules/jose/dist/node/cjs/key/generate_key_pair.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generateKeyPair = generateKeyPair;
    var generate_js_1 = require_generate();
    async function generateKeyPair(alg, options) {
      return (0, generate_js_1.generateKeyPair)(alg, options);
    }
  }
});

// node_modules/jose/dist/node/cjs/key/generate_secret.js
var require_generate_secret = __commonJS({
  "node_modules/jose/dist/node/cjs/key/generate_secret.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generateSecret = generateSecret;
    var generate_js_1 = require_generate();
    async function generateSecret(alg, options) {
      return (0, generate_js_1.generateSecret)(alg, options);
    }
  }
});

// node_modules/jose/dist/node/cjs/runtime/runtime.js
var require_runtime = __commonJS({
  "node_modules/jose/dist/node/cjs/runtime/runtime.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = "node:crypto";
  }
});

// node_modules/jose/dist/node/cjs/util/runtime.js
var require_runtime2 = __commonJS({
  "node_modules/jose/dist/node/cjs/util/runtime.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var runtime_js_1 = require_runtime();
    exports2.default = runtime_js_1.default;
  }
});

// node_modules/jose/dist/node/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/jose/dist/node/cjs/index.js"(exports2) {
    "use strict";
    init_define_PANEL_ASSETS();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.cryptoRuntime = exports2.base64url = exports2.generateSecret = exports2.generateKeyPair = exports2.errors = exports2.decodeJwt = exports2.decodeProtectedHeader = exports2.importJWK = exports2.importX509 = exports2.importPKCS8 = exports2.importSPKI = exports2.exportJWK = exports2.exportSPKI = exports2.exportPKCS8 = exports2.UnsecuredJWT = exports2.experimental_jwksCache = exports2.jwksCache = exports2.createRemoteJWKSet = exports2.createLocalJWKSet = exports2.EmbeddedJWK = exports2.calculateJwkThumbprintUri = exports2.calculateJwkThumbprint = exports2.EncryptJWT = exports2.SignJWT = exports2.GeneralSign = exports2.FlattenedSign = exports2.CompactSign = exports2.FlattenedEncrypt = exports2.CompactEncrypt = exports2.jwtDecrypt = exports2.jwtVerify = exports2.generalVerify = exports2.flattenedVerify = exports2.compactVerify = exports2.GeneralEncrypt = exports2.generalDecrypt = exports2.flattenedDecrypt = exports2.compactDecrypt = void 0;
    var decrypt_js_1 = require_decrypt3();
    Object.defineProperty(exports2, "compactDecrypt", { enumerable: true, get: function() {
      return decrypt_js_1.compactDecrypt;
    } });
    var decrypt_js_2 = require_decrypt2();
    Object.defineProperty(exports2, "flattenedDecrypt", { enumerable: true, get: function() {
      return decrypt_js_2.flattenedDecrypt;
    } });
    var decrypt_js_3 = require_decrypt4();
    Object.defineProperty(exports2, "generalDecrypt", { enumerable: true, get: function() {
      return decrypt_js_3.generalDecrypt;
    } });
    var encrypt_js_1 = require_encrypt3();
    Object.defineProperty(exports2, "GeneralEncrypt", { enumerable: true, get: function() {
      return encrypt_js_1.GeneralEncrypt;
    } });
    var verify_js_1 = require_verify3();
    Object.defineProperty(exports2, "compactVerify", { enumerable: true, get: function() {
      return verify_js_1.compactVerify;
    } });
    var verify_js_2 = require_verify2();
    Object.defineProperty(exports2, "flattenedVerify", { enumerable: true, get: function() {
      return verify_js_2.flattenedVerify;
    } });
    var verify_js_3 = require_verify4();
    Object.defineProperty(exports2, "generalVerify", { enumerable: true, get: function() {
      return verify_js_3.generalVerify;
    } });
    var verify_js_4 = require_verify5();
    Object.defineProperty(exports2, "jwtVerify", { enumerable: true, get: function() {
      return verify_js_4.jwtVerify;
    } });
    var decrypt_js_4 = require_decrypt5();
    Object.defineProperty(exports2, "jwtDecrypt", { enumerable: true, get: function() {
      return decrypt_js_4.jwtDecrypt;
    } });
    var encrypt_js_2 = require_encrypt4();
    Object.defineProperty(exports2, "CompactEncrypt", { enumerable: true, get: function() {
      return encrypt_js_2.CompactEncrypt;
    } });
    var encrypt_js_3 = require_encrypt2();
    Object.defineProperty(exports2, "FlattenedEncrypt", { enumerable: true, get: function() {
      return encrypt_js_3.FlattenedEncrypt;
    } });
    var sign_js_1 = require_sign3();
    Object.defineProperty(exports2, "CompactSign", { enumerable: true, get: function() {
      return sign_js_1.CompactSign;
    } });
    var sign_js_2 = require_sign2();
    Object.defineProperty(exports2, "FlattenedSign", { enumerable: true, get: function() {
      return sign_js_2.FlattenedSign;
    } });
    var sign_js_3 = require_sign4();
    Object.defineProperty(exports2, "GeneralSign", { enumerable: true, get: function() {
      return sign_js_3.GeneralSign;
    } });
    var sign_js_4 = require_sign5();
    Object.defineProperty(exports2, "SignJWT", { enumerable: true, get: function() {
      return sign_js_4.SignJWT;
    } });
    var encrypt_js_4 = require_encrypt5();
    Object.defineProperty(exports2, "EncryptJWT", { enumerable: true, get: function() {
      return encrypt_js_4.EncryptJWT;
    } });
    var thumbprint_js_1 = require_thumbprint();
    Object.defineProperty(exports2, "calculateJwkThumbprint", { enumerable: true, get: function() {
      return thumbprint_js_1.calculateJwkThumbprint;
    } });
    Object.defineProperty(exports2, "calculateJwkThumbprintUri", { enumerable: true, get: function() {
      return thumbprint_js_1.calculateJwkThumbprintUri;
    } });
    var embedded_js_1 = require_embedded();
    Object.defineProperty(exports2, "EmbeddedJWK", { enumerable: true, get: function() {
      return embedded_js_1.EmbeddedJWK;
    } });
    var local_js_1 = require_local();
    Object.defineProperty(exports2, "createLocalJWKSet", { enumerable: true, get: function() {
      return local_js_1.createLocalJWKSet;
    } });
    var remote_js_1 = require_remote();
    Object.defineProperty(exports2, "createRemoteJWKSet", { enumerable: true, get: function() {
      return remote_js_1.createRemoteJWKSet;
    } });
    Object.defineProperty(exports2, "jwksCache", { enumerable: true, get: function() {
      return remote_js_1.jwksCache;
    } });
    Object.defineProperty(exports2, "experimental_jwksCache", { enumerable: true, get: function() {
      return remote_js_1.experimental_jwksCache;
    } });
    var unsecured_js_1 = require_unsecured();
    Object.defineProperty(exports2, "UnsecuredJWT", { enumerable: true, get: function() {
      return unsecured_js_1.UnsecuredJWT;
    } });
    var export_js_1 = require_export();
    Object.defineProperty(exports2, "exportPKCS8", { enumerable: true, get: function() {
      return export_js_1.exportPKCS8;
    } });
    Object.defineProperty(exports2, "exportSPKI", { enumerable: true, get: function() {
      return export_js_1.exportSPKI;
    } });
    Object.defineProperty(exports2, "exportJWK", { enumerable: true, get: function() {
      return export_js_1.exportJWK;
    } });
    var import_js_1 = require_import();
    Object.defineProperty(exports2, "importSPKI", { enumerable: true, get: function() {
      return import_js_1.importSPKI;
    } });
    Object.defineProperty(exports2, "importPKCS8", { enumerable: true, get: function() {
      return import_js_1.importPKCS8;
    } });
    Object.defineProperty(exports2, "importX509", { enumerable: true, get: function() {
      return import_js_1.importX509;
    } });
    Object.defineProperty(exports2, "importJWK", { enumerable: true, get: function() {
      return import_js_1.importJWK;
    } });
    var decode_protected_header_js_1 = require_decode_protected_header();
    Object.defineProperty(exports2, "decodeProtectedHeader", { enumerable: true, get: function() {
      return decode_protected_header_js_1.decodeProtectedHeader;
    } });
    var decode_jwt_js_1 = require_decode_jwt();
    Object.defineProperty(exports2, "decodeJwt", { enumerable: true, get: function() {
      return decode_jwt_js_1.decodeJwt;
    } });
    exports2.errors = require_errors();
    var generate_key_pair_js_1 = require_generate_key_pair();
    Object.defineProperty(exports2, "generateKeyPair", { enumerable: true, get: function() {
      return generate_key_pair_js_1.generateKeyPair;
    } });
    var generate_secret_js_1 = require_generate_secret();
    Object.defineProperty(exports2, "generateSecret", { enumerable: true, get: function() {
      return generate_secret_js_1.generateSecret;
    } });
    exports2.base64url = require_base64url2();
    var runtime_js_1 = require_runtime2();
    Object.defineProperty(exports2, "cryptoRuntime", { enumerable: true, get: function() {
      return runtime_js_1.default;
    } });
  }
});

// ../post-login.cjs
var require_post_login = __commonJS({
  "../post-login.cjs"(exports2) {
    init_define_PANEL_ASSETS();
    var CLAIM = "https://scaneng-map/license";
    var DAY = 86400;
    function decide(grant, activation, now) {
      const base = { schema: 1, product: "scaneng-map", status: "unassigned", checked_at: now, valid_until: now };
      if (!grant) return { claim: base };
      if (grant.schema !== 1 || typeof grant.id !== "string" || !grant.id || !Number.isSafeInteger(grant.revision) || grant.revision < 1 || grant.trial_days !== 14 || !["issued", "revoked"].includes(grant.status)) return { claim: { ...base, status: "invalid" } };
      const claim = { ...base, license_id: grant.id, revision: grant.revision };
      if (grant.status === "revoked") return { claim: { ...claim, status: "revoked" } };
      let next = activation;
      if ((!next || next.license_id !== grant.id) && Number.isSafeInteger(grant.expires_at) && grant.expires_at > 0 && grant.expires_at <= now) {
        return { claim: { ...base, reason: "expired_before_activation" } };
      }
      if (!next || next.license_id !== grant.id) next = { license_id: grant.id, started_at: now, trial_expires_at: now + 14 * DAY };
      if (!Number.isSafeInteger(next.started_at) || !Number.isSafeInteger(next.trial_expires_at) || next.started_at > now + 60 || next.trial_expires_at !== next.started_at + 14 * DAY)
        return { claim: { ...claim, status: "invalid" } };
      const end = grant.expires_at == null ? next.trial_expires_at : grant.expires_at;
      if (!Number.isSafeInteger(end) || end <= next.started_at) return { claim: { ...claim, status: "invalid" } };
      return {
        activation: next !== activation ? next : void 0,
        claim: {
          ...claim,
          status: end > now ? "active" : "expired",
          activated_at: next.started_at,
          expires_at: end,
          valid_until: Math.min(end, now + DAY)
        }
      };
    }
    var groupKey = /^scaneng_group_([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$/;
    function effective(metadata, now) {
      const personal = decide(metadata.scaneng_license, metadata.scaneng_activation, now);
      const writes = [];
      if (personal.activation) writes.push(["scaneng_activation", personal.activation]);
      if (personal.claim.status === "revoked") return { claim: personal.claim, writes };
      let best = personal.claim;
      for (const [key, grant] of Object.entries(metadata)) {
        const match = groupKey.exec(key);
        if (!match || !grant || grant.id !== match[1]) continue;
        const activationKey = "scaneng_group_activation_" + match[1];
        const result = decide(grant, metadata[activationKey], now);
        if (result.activation) writes.push([activationKey, result.activation]);
        if (result.claim.status === "active" && (best.status !== "active" || result.claim.expires_at > best.expires_at) || best.status === "unassigned" && (result.claim.status !== "unassigned" || result.claim.reason)) best = result.claim;
      }
      return { claim: best, writes };
    }
    exports2.onExecutePostLogin = async (event, api) => {
      if (event.client.client_id !== event.secrets.SCANENG_NATIVE_CLIENT_ID) return;
      const metadata = event.user.app_metadata || {};
      const result = effective(metadata, Math.floor(Date.now() / 1e3));
      for (const [key, activation] of result.writes) api.user.setAppMetadata(key, activation);
      api.idToken.setCustomClaim(CLAIM, result.claim);
    };
    exports2.decide = decide;
    exports2.effective = effective;
  }
});

// licensing.cjs
var require_licensing = __commonJS({
  "licensing.cjs"(exports2, module2) {
    "use strict";
    init_define_PANEL_ASSETS();
    var { randomUUID } = require("crypto");
    var { effective } = require_post_login();
    var DAY = 86400;
    var PanelError = class extends Error {
      constructor(status, message) {
        super(message);
        this.status = status;
      }
    };
    function requireValue(value, message, status = 400) {
      if (!value) throw new PanelError(status, message);
    }
    function displayUser(user) {
      const metadata = user.app_metadata || {};
      const { claim, writes } = effective(metadata, Math.floor(Date.now() / 1e3));
      let status = {
        unassigned: "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043D\u0435 \u0432\u044B\u0434\u0430\u043D\u0430",
        revoked: "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043E\u0442\u043E\u0437\u0432\u0430\u043D\u0430",
        expired: "\u0421\u0440\u043E\u043A \u0438\u0441\u0442\u0451\u043A",
        invalid: "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438"
      }[claim.status];
      if (user.blocked) status = "\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D";
      else if (claim.reason === "expired_before_activation") status = "\u0421\u0440\u043E\u043A \u0438\u0441\u0442\u0451\u043A \u0434\u043E \u043F\u0435\u0440\u0432\u043E\u0439 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438";
      else if (claim.status === "active") status = writes.some(([, a]) => a.license_id === claim.license_id) ? "\u041E\u0436\u0438\u0434\u0430\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438" : "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u0430";
      else if (claim.status === "unassigned" && metadata.scaneng_activation != null) status = "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438";
      return { subject: user.user_id, email: user.email || user.user_id, status };
    }
    function selectedGroup(data, id) {
      const group = data.groups.find((item) => item.id === id);
      requireValue(group, "\u0413\u0440\u0443\u043F\u043F\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.", 404);
      return group;
    }
    function selectedJob(data, id, actor) {
      const job = data.jobs.find((item) => item.id === id && (item.actor === actor || item.confirmed));
      requireValue(job, "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430.", 404);
      return job;
    }
    function completed(member) {
      return member.result === "issued" || member.result === "skipped";
    }
    function publicJob(job) {
      const { id, label, expiresAt, confirmed, members, actor, groupId, kind } = job;
      return {
        id,
        label,
        expiresAt,
        confirmed,
        actor,
        groupId,
        kind,
        members: members.map(({ subject, email, result, note }) => ({ subject, email, result, note }))
      };
    }
    function recipients(targets) {
      return targets.map(({ subject, email, joined }) => ({
        subject,
        email,
        joined,
        operation: randomUUID(),
        license: randomUUID(),
        result: "pending",
        note: ""
      }));
    }
    function pendingWrite(data, subject, exceptId) {
      return data.jobs.some((other) => other.id !== exceptId && other.members.some((item) => item.subject === subject && item.result === "processing"));
    }
    async function command(name, input, { store, api, actor, now }) {
      var _a, _b;
      if (name === "state") {
        const data = await store.read();
        const jobs = data.jobs.filter((job2) => job2.confirmed).slice().reverse();
        return { groups: data.groups, jobs: jobs.map(publicJob) };
      }
      if (name === "search") {
        const email = String(input.email || "").trim();
        requireValue(email && email.length <= 254, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F.");
        return { users: (await api.byEmail(email)).map(displayUser) };
      }
      if (name === "group") {
        const label = String(input.name || "").trim();
        requireValue(label && label.length <= 100, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B \u0434\u043B\u0438\u043D\u043E\u0439 \u0434\u043E 100 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.");
        return store.update((data) => {
          requireValue(
            !data.groups.some((group2) => group2.name.toLowerCase() === label.toLowerCase()),
            "\u0413\u0440\u0443\u043F\u043F\u0430 \u0441 \u0442\u0430\u043A\u0438\u043C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C \u0443\u0436\u0435 \u0435\u0441\u0442\u044C.",
            409
          );
          const group = { id: randomUUID(), name: label, version: 1, policy: null, members: [] };
          data.groups.push(group);
          return group;
        });
      }
      if (name === "membership") {
        requireValue(input.change === "add" || input.change === "remove", "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u043C.");
        let member2;
        if (input.change === "add") {
          const user2 = await api.byId(input.subject);
          requireValue(user2.user_id === input.subject, "Auth0 \u0432\u0435\u0440\u043D\u0443\u043B \u0434\u0440\u0443\u0433\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442.", 409);
          member2 = { subject: user2.user_id, email: user2.email || user2.user_id };
        }
        const change = await store.update((data) => {
          const group = selectedGroup(data, input.group);
          const existing = group.members.find((item) => item.subject === input.subject);
          if (Boolean(existing) === Boolean(member2)) {
            const outstanding = data.jobs.slice().reverse().find((item) => item.confirmed && item.groupId === group.id && item.kind === (member2 ? "join" : "leave") && item.members.some((m) => m.subject === input.subject && !completed(m)));
            return { group, jobId: outstanding == null ? void 0 : outstanding.id };
          }
          requireValue(!pendingWrite(data, input.subject), "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u0441 \u044D\u0442\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C.", 409);
          if (member2) {
            member2.joined = randomUUID();
            group.members.push(member2);
          } else group.members = group.members.filter((item) => item !== existing);
          group.version++;
          if (!group.policy) return { group };
          const job2 = {
            id: randomUUID(),
            actor,
            created: now,
            confirmed: now,
            label: group.name,
            groupId: group.id,
            kind: member2 ? "join" : "leave",
            policy: group.policy.id,
            revision: group.policy.revision,
            expiresAt: group.policy.expiresAt,
            members: recipients([member2 || existing])
          };
          data.jobs.push(job2);
          return { group, jobId: job2.id };
        });
        if (change.jobId) await command("issue", { job: change.jobId, subject: input.subject }, { store, api, actor, now });
        return change.group;
      }
      if (name === "preview") {
        requireValue(Boolean(input.group) !== Boolean(input.subject), "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438\u043B\u0438 \u0433\u0440\u0443\u043F\u043F\u0443.");
        requireValue(input.days === null || Number.isSafeInteger(input.days) && input.days > 0 && now + input.days * DAY <= 253402214399, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0446\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u043D\u0435\u0439.");
        let target;
        if (input.subject) {
          const user2 = await api.byId(input.subject);
          requireValue(user2.user_id === input.subject, "Auth0 \u0432\u0435\u0440\u043D\u0443\u043B \u0434\u0440\u0443\u0433\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442.", 409);
          target = { subject: user2.user_id, email: user2.email || user2.user_id };
        }
        return store.update((data) => {
          data.jobs = data.jobs.filter((job3) => job3.confirmed || job3.created + 3600 > now);
          const group = target ? null : selectedGroup(data, input.group);
          const targets = target ? [target] : group.members;
          const job2 = {
            id: randomUUID(),
            actor,
            created: now,
            confirmed: false,
            label: target ? target.email : group.name,
            groupId: group == null ? void 0 : group.id,
            rosterVersion: group == null ? void 0 : group.version,
            kind: group ? "policy" : "personal",
            expiresAt: input.days === null ? null : now + DAY * input.days,
            members: recipients(targets)
          };
          data.jobs.push(job2);
          return publicJob(job2);
        });
      }
      if (name === "confirm") {
        return store.update((data) => {
          var _a2;
          const job2 = selectedJob(data, input.job, actor);
          requireValue(job2.confirmed || now < job2.created + 3600, "\u0421\u0440\u043E\u043A \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0438\u0441\u0442\u0451\u043A.", 409);
          if (!job2.confirmed && job2.groupId) {
            const group = selectedGroup(data, job2.groupId);
            requireValue(group.version === job2.rosterVersion, "\u0421\u043E\u0441\u0442\u0430\u0432 \u0438\u043B\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u0433\u0440\u0443\u043F\u043F\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0438\u0441\u044C. \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440.", 409);
            group.policy = {
              id: job2.id,
              revision: (((_a2 = group.policy) == null ? void 0 : _a2.revision) || 0) + 1,
              assigned: now,
              expiresAt: job2.expiresAt,
              actor
            };
            group.version++;
            job2.policy = group.policy.id;
            job2.revision = group.policy.revision;
          }
          if (!job2.confirmed) job2.confirmed = now;
          return publicJob(job2);
        });
      }
      requireValue(name === "issue", "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.", 404);
      const { job, member } = await store.update((data) => {
        var _a2;
        const job2 = selectedJob(data, input.job, actor);
        requireValue(job2.confirmed, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0441\u043E\u0441\u0442\u0430\u0432 \u0438 \u0441\u0440\u043E\u043A \u0432\u044B\u0434\u0430\u0447\u0438.", 409);
        const member2 = job2.members.find((item) => item.subject === input.subject);
        requireValue(member2, "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D\u043D\u043E\u043C \u0441\u043F\u0438\u0441\u043A\u0435.", 409);
        if (!completed(member2)) {
          requireValue(!pendingWrite(data, member2.subject, job2.id), "\u0414\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0435\u0441\u0442\u044C \u043D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u0430\u044F \u0432\u044B\u0434\u0430\u0447\u0430. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u0435\u0451.", 409);
          if (job2.groupId) {
            const group = selectedGroup(data, job2.groupId);
            const current = group.members.find((item) => item.subject === member2.subject);
            if (job2.kind === "leave" ? Boolean(current) : (current == null ? void 0 : current.joined) !== member2.joined || ((_a2 = group.policy) == null ? void 0 : _a2.id) !== job2.policy) {
              Object.assign(member2, { result: "skipped", note: "\u0427\u043B\u0435\u043D\u0441\u0442\u0432\u043E \u0438\u043B\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u0443\u0436\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u043E\u0441\u044C", finished: now });
              return { job: job2, member: member2 };
            }
          }
          member2.result = "processing";
        }
        return { job: job2, member: member2 };
      });
      if (completed(member)) return publicJob(job);
      let result = "skipped";
      let note;
      let user;
      try {
        user = await api.byId(member.subject);
      } catch (error) {
        if (!(error instanceof PanelError) || error.status !== 404) throw error;
      }
      requireValue(!user || user.user_id === member.subject, "Auth0 \u0432\u0435\u0440\u043D\u0443\u043B \u0434\u0440\u0443\u0433\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442.", 409);
      const metadata = (user == null ? void 0 : user.app_metadata) || {};
      const previous = metadata.scaneng_license;
      if (!user) {
        note = "\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0443\u0434\u0430\u043B\u0451\u043D";
      } else if (job.groupId) {
        const key = "scaneng_group_" + job.groupId;
        const grant = metadata[key];
        if (job.kind === "leave") {
          if (grant != null) {
            await api.setGroupGrant(member.subject, job.groupId, null);
            const after = await api.byId(member.subject);
            requireValue(
              after.user_id === member.subject && ((_a = after.app_metadata) == null ? void 0 : _a[key]) == null,
              "Auth0 \u043F\u043E\u043A\u0430 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043B \u0441\u043D\u044F\u0442\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430.",
              409
            );
          }
          result = "issued";
          note = "\u0421\u043D\u044F\u0442 \u0434\u043E\u0441\u0442\u0443\u043F \u044D\u0442\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u044B";
        } else if ((grant == null ? void 0 : grant.policy_id) === job.policy && (grant == null ? void 0 : grant.status) === "issued" && (grant == null ? void 0 : grant.id) === job.groupId) {
          result = "issued";
          note = "\u0413\u0440\u0443\u043F\u043F\u043E\u0432\u0430\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430";
        } else {
          const next = {
            schema: 1,
            id: job.groupId,
            revision: job.revision,
            status: "issued",
            trial_days: 14,
            issued_at: (grant == null ? void 0 : grant.issued_at) || job.confirmed,
            updated_at: job.confirmed,
            operator: job.actor,
            last_operation: member.operation,
            policy_id: job.policy,
            reason: "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0433\u0440\u0443\u043F\u043F\u044B " + job.label
          };
          if (job.expiresAt !== null) next.expires_at = job.expiresAt;
          await api.setGroupGrant(member.subject, job.groupId, next);
          const after = await api.byId(member.subject);
          requireValue(
            after.user_id === member.subject && Object.entries(next).every(([k, v]) => {
              var _a2, _b2;
              return ((_b2 = (_a2 = after.app_metadata) == null ? void 0 : _a2[key]) == null ? void 0 : _b2[k]) === v;
            }),
            "\u041E\u0442\u0432\u0435\u0442 \u0440\u0430\u0441\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0441 \u0433\u0440\u0443\u043F\u043F\u043E\u0432\u044B\u043C \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u044D\u0442\u0443 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E.",
            409
          );
          result = "issued";
          note = user.blocked ? "\u041F\u0440\u0430\u0432\u0438\u043B\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E. \u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D" : (previous == null ? void 0 : previous.status) === "revoked" ? "\u041F\u0440\u0430\u0432\u0438\u043B\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E. \u041D\u0430 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0442\u0437\u044B\u0432" : "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0433\u0440\u0443\u043F\u043F\u044B";
        }
      } else if ((previous == null ? void 0 : previous.id) === member.license && (previous == null ? void 0 : previous.last_operation) === member.operation) {
        result = "issued";
        note = "\u0412\u044B\u0434\u0430\u0447\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430 \u0432 Auth0";
      } else if (previous != null || metadata.scaneng_activation != null || user.blocked) {
        note = displayUser(user).status;
      } else if (job.expiresAt !== null && job.expiresAt <= now) {
        note = "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0439 \u0441\u0440\u043E\u043A \u0443\u0436\u0435 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F";
      } else {
        const grant = {
          schema: 1,
          id: member.license,
          revision: 1,
          status: "issued",
          trial_days: 14,
          issued_at: job.confirmed,
          updated_at: job.confirmed,
          operator: job.actor,
          last_operation: member.operation,
          reason: "\u0412\u044B\u0434\u0430\u0447\u0430 \u0447\u0435\u0440\u0435\u0437 \u043F\u0430\u043D\u0435\u043B\u044C SCANENG MAP",
          batch_id: job.id
        };
        if (job.expiresAt !== null) grant.expires_at = job.expiresAt;
        await api.issue(member.subject, grant);
        const after = await api.byId(member.subject);
        const saved = (_b = after.app_metadata) == null ? void 0 : _b.scaneng_license;
        requireValue(
          after.user_id === member.subject && Object.entries(grant).every(([key, value]) => (saved == null ? void 0 : saved[key]) === value),
          "\u041E\u0442\u0432\u0435\u0442 \u0440\u0430\u0441\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0441 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u044D\u0442\u043E\u0439 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438.",
          409
        );
        result = "issued";
        note = "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0432\u044B\u0434\u0430\u043D\u0430";
      }
      return store.update((data) => {
        const current = selectedJob(data, job.id, actor);
        const target = current.members.find((item) => item.subject === member.subject);
        if (!completed(target)) Object.assign(target, { result, note, finished: now, completedBy: actor });
        return publicJob(current);
      });
    }
    function extensionStore(storage) {
      const read = () => new Promise((resolve, reject) => storage.get((error, data) => {
        if (error) return reject(error);
        if (data == null || Object.getPrototypeOf(data) === Object.prototype && !Object.keys(data).length)
          return resolve({ version: 1, groups: [], jobs: [] });
        if (data.version !== 1 || !Array.isArray(data.groups) || !Array.isArray(data.jobs))
          return reject(new PanelError(503, "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u0430\u043D\u0435\u043B\u0438."));
        resolve(data);
      }));
      return { read, async update(change) {
        for (let attempt = 0; attempt < 4; attempt++) {
          const data = await read();
          const result = change(data);
          try {
            await new Promise((resolve, reject) => storage.set(
              data,
              { force: 0 },
              (error) => error ? reject(error) : resolve()
            ));
            return result;
          } catch (error) {
            if (Number(error.code) !== 409) throw error;
          }
        }
        throw new PanelError(409, "\u0421\u043E\u0441\u0442\u0430\u0432 \u0438\u043B\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0438\u0441\u044C. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441.");
      } };
    }
    module2.exports = { command, extensionStore, PanelError, requireValue };
  }
});

// dashboard.cjs
var require_dashboard = __commonJS({
  "dashboard.cjs"(exports2, module2) {
    "use strict";
    init_define_PANEL_ASSETS();
    var { createHash, randomBytes } = require("crypto");
    var https = require("https");
    var { EncryptJWT, jwtDecrypt, jwtVerify, createRemoteJWKSet } = require_cjs();
    var { PanelError, requireValue, command, extensionStore } = require_licensing();
    var DOMAIN = "scaneng-map.us.auth0.com";
    var BASE = "https://scaneng-map.us.webtask.run/scaneng-license-admin";
    var prefix = new URL(BASE).pathname;
    var COOKIE = "scaneng_license_panel";
    var PERMISSIONS = ["read:users", "update:users_app_metadata"];
    var CALLBACK = BASE + "/login/callback";
    var remoteKeys = /* @__PURE__ */ new Map();
    function settings(values) {
      const rta = String(values.AUTH0_RTA || "auth0.auth0.com").replace(/^https:\/\//, "").replace(/\/$/, "");
      requireValue(
        /^[\w.-]+\.auth0\.com$/.test(rta) && rta !== DOMAIN && (!values.AUTH0_DOMAIN || values.AUTH0_DOMAIN === DOMAIN) && typeof values.PANEL_SECRET === "string" && Buffer.byteLength(values.PANEL_SECRET) >= 32,
        "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F \u0434\u043B\u044F tenant SCANENG MAP.",
        503
      );
      return { issuer: "https://" + rta + "/", key: createHash("sha256").update(values.PANEL_SECRET).digest() };
    }
    function keys(issuer) {
      if (!remoteKeys.has(issuer)) remoteKeys.set(issuer, createRemoteJWKSet(new URL(".well-known/jwks.json", issuer)));
      return remoteKeys.get(issuer);
    }
    async function seal(payload, key, purpose, expires) {
      return new EncryptJWT(payload).setProtectedHeader({ alg: "dir", enc: "A256GCM" }).setIssuer(BASE).setAudience(purpose).setIssuedAt().setExpirationTime(expires).encrypt(key);
    }
    async function unseal(token, key, purpose) {
      try {
        return (await jwtDecrypt(token, key, {
          issuer: BASE,
          audience: purpose,
          keyManagementAlgorithms: ["dir"],
          contentEncryptionAlgorithms: ["A256GCM"],
          requiredClaims: ["exp"]
        })).payload;
      } catch {
        throw new PanelError(401, "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u043F\u0430\u043D\u0435\u043B\u044C \u043F\u043E\u0434 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u0443\u0447\u0451\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u044C\u044E Auth0.");
      }
    }
    async function verifyDashboard(form, challenge, issuer, verifier = keys(issuer)) {
      requireValue(form.get("state") && form.get("state") === challenge.state, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0432\u0445\u043E\u0434 \u0432 \u043F\u0430\u043D\u0435\u043B\u044C.", 401);
      const common = { issuer, algorithms: ["RS256"], requiredClaims: ["sub", "exp"] };
      let id, access;
      try {
        [id, access] = await Promise.all([
          jwtVerify(form.get("id_token"), verifier, { ...common, audience: BASE }),
          jwtVerify(form.get("access_token"), verifier, { ...common, audience: "https://" + DOMAIN + "/api/v2/" })
        ]);
      } catch {
        throw new PanelError(401, "Auth0 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0443\u044E \u0441\u0435\u0441\u0441\u0438\u044E \u044D\u0442\u043E\u0433\u043E tenant.");
      }
      const owner = id.payload;
      const rights = access.payload;
      requireValue(owner.nonce === challenge.nonce && owner.sub === rights.sub && rights.azp === BASE && (!owner.azp || owner.azp === BASE), "\u0414\u0430\u043D\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u0430 \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u043A \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u0435\u0441\u0441\u0438\u0438.", 401);
      const scopes = new Set(String(rights.scope || "").split(" "));
      requireValue(
        PERMISSIONS.every((scope) => scopes.has(scope)),
        "\u0414\u043B\u044F \u0432\u044B\u0434\u0430\u0447\u0438 \u043D\u0443\u0436\u043D\u044B \u043F\u0440\u0430\u0432\u0430 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u043D\u0430 \u0447\u0442\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 app_metadata.",
        403
      );
      return {
        actor: issuer + "#" + owner.sub,
        title: owner.email || owner.sub,
        token: form.get("access_token"),
        expires: Math.min(owner.exp, rights.exp, Math.floor(Date.now() / 1e3) + 900)
      };
    }
    function management(accessToken) {
      function request(method, path, data) {
        return new Promise((resolve, reject) => {
          const body = data === void 0 ? null : JSON.stringify(data);
          const headers = { Authorization: "Bearer " + accessToken, Accept: "application/json" };
          if (body !== null) Object.assign(headers, { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(body) });
          const req = https.request({ hostname: DOMAIN, path, method, headers, timeout: 12e3 }, (res) => {
            const parts = [];
            let length = 0;
            res.on("data", (piece) => {
              length += piece.length;
              if (length > 1048576) req.destroy(new Error("Response too large"));
              else parts.push(piece);
            });
            res.on("error", reject);
            res.on("end", () => {
              if (res.statusCode < 200 || res.statusCode >= 300)
                return reject(new PanelError(res.statusCode, "Auth0 Management API \u0432\u0435\u0440\u043D\u0443\u043B HTTP " + res.statusCode + "."));
              try {
                resolve(length ? JSON.parse(Buffer.concat(parts).toString("utf8")) : null);
              } catch {
                reject(new PanelError(502, "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u043E\u0442\u0432\u0435\u0442 Auth0."));
              }
            });
          });
          req.on("timeout", () => req.destroy(new Error("Timeout")));
          req.on("error", () => reject(new PanelError(502, "\u0421\u0432\u044F\u0437\u044C \u0441 Auth0 \u043F\u0440\u0435\u0440\u0432\u0430\u043B\u0430\u0441\u044C. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0442\u0443 \u0436\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E.")));
          req.end(body);
        });
      }
      const selection = "fields=user_id,email,blocked,app_metadata&include_fields=true";
      function userPath(subject) {
        requireValue(typeof subject === "string" && subject.length > 0 && subject.length <= 512, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442.");
        return "/api/v2/users/" + encodeURIComponent(subject);
      }
      return {
        byEmail: (email) => request("GET", "/api/v2/users-by-email?email=" + encodeURIComponent(email) + "&" + selection),
        byId: (subject) => request("GET", userPath(subject) + "?" + selection),
        issue: (subject, grant) => request("PATCH", userPath(subject), { app_metadata: { scaneng_license: grant } }),
        setGroupGrant(subject, id, grant) {
          requireValue(/^[a-f0-9-]{36}$/.test(id), "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430.");
          return request("PATCH", userPath(subject), { app_metadata: { ["scaneng_group_" + id]: grant } });
        }
      };
    }
    function cookie(name, value, maxAge, sameSite) {
      return name + "=" + value + "; Path=" + prefix + "; HttpOnly; Secure; SameSite=" + sameSite + "; Max-Age=" + maxAge;
    }
    function cookieValue(req, name) {
      const entries = String(req.headers.cookie || "").split(";").map((entry) => entry.trim()).filter((entry) => entry.startsWith(name + "="));
      return entries.length === 1 ? entries[0].slice(name.length + 1) : "";
    }
    async function requestBody(req) {
      const chunks = [];
      let length = 0;
      for await (const piece of req) {
        length += piece.length;
        requireValue(length <= 32768, "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441.", 413);
        chunks.push(Buffer.from(piece));
      }
      return Buffer.concat(chunks).toString("utf8");
    }
    function createHandler2(assets, services = {}) {
      return async function handle(context, req, res) {
        const respond = (status, body, type = "application/json; charset=utf-8") => {
          res.statusCode = status;
          res.setHeader("Content-Type", type);
          res.end(type.startsWith("application/json") ? JSON.stringify(body) : body);
        };
        const redirect = (location) => {
          res.statusCode = 303;
          res.setHeader("Location", location);
          res.end();
        };
        res.setHeader("Cache-Control", "no-store");
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("Referrer-Policy", "no-referrer");
        res.setHeader("Content-Security-Policy", "default-src 'none'; script-src 'self'; style-src 'self'; connect-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'");
        const method = req.method;
        let path = new URL(req.url, BASE).pathname;
        if (path === prefix || path.startsWith(prefix + "/")) path = path.slice(prefix.length) || "/";
        try {
          if (method === "GET" && path === "/.well-known/oauth2-client-configuration") {
            return respond(200, { client_name: "SCANENG MAP Licenses", redirect_uris: [CALLBACK], post_logout_redirect_uris: [BASE] });
          }
          if (method === "GET" && path === "/meta") return respond(200, assets.manifest);
          if (method === "GET" && path === "/panel.css") return respond(200, assets.css, "text/css; charset=utf-8");
          if (method === "GET" && path === "/panel.js") return respond(200, assets.js, "application/javascript; charset=utf-8");
          const cfg = settings(context.secrets || {});
          const now = Math.floor(Date.now() / 1e3);
          if (method === "GET" && path === "/login") {
            const challenge = { state: randomBytes(24).toString("hex"), nonce: randomBytes(24).toString("hex") };
            res.setHeader("Set-Cookie", cookie(COOKIE + "_login", await seal(challenge, cfg.key, "login", now + 300), 300, "None"));
            const params = new URLSearchParams({
              client_id: BASE,
              redirect_uri: CALLBACK,
              response_type: "token id_token",
              response_mode: "form_post",
              scope: ["openid", "email", ...PERMISSIONS].join(" "),
              audience: "https://" + DOMAIN + "/api/v2/",
              expiration: "900",
              ...challenge
            });
            return redirect(cfg.issuer + "authorize?" + params);
          }
          if (method === "POST" && path === "/login/callback") {
            const challenge = await unseal(cookieValue(req, COOKIE + "_login"), cfg.key, "login");
            const form = new URLSearchParams(await requestBody(req));
            const admin = await (services.verifyDashboard || verifyDashboard)(form, challenge, cfg.issuer);
            const session2 = await seal({
              actor: admin.actor,
              title: admin.title,
              management: admin.token,
              csrf: randomBytes(24).toString("hex")
            }, cfg.key, "session", admin.expires);
            requireValue(session2.length < 3850, "\u041E\u0442\u0432\u0435\u0442 Auth0 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0432\u0435\u043B\u0438\u043A \u0434\u043B\u044F \u0437\u0430\u0449\u0438\u0449\u0451\u043D\u043D\u043E\u0439 \u0441\u0435\u0441\u0441\u0438\u0438 \u043F\u0430\u043D\u0435\u043B\u0438.", 502);
            res.setHeader("Set-Cookie", [
              cookie(COOKIE + "_login", "", 0, "None"),
              cookie(COOKIE, session2, admin.expires - now, "Lax")
            ]);
            return redirect(BASE + "/");
          }
          if (method === "GET" && path === "/") {
            if (!cookieValue(req, COOKIE)) return respond(200, assets.login, "text/html; charset=utf-8");
            try {
              await unseal(cookieValue(req, COOKIE), cfg.key, "session");
            } catch {
              return respond(200, assets.login, "text/html; charset=utf-8");
            }
            return respond(200, assets.html, "text/html; charset=utf-8");
          }
          const session = await unseal(cookieValue(req, COOKIE), cfg.key, "session");
          if (method === "GET" && path === "/api/session") return respond(200, { title: session.title, csrf: session.csrf });
          requireValue(method === "POST" && path.startsWith("/api/"), "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.", 404);
          requireValue(req.headers.origin === new URL(BASE).origin && req.headers["x-scaneng-csrf"] === session.csrf, "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u0438\u0437 \u043F\u0430\u043D\u0435\u043B\u0438 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0439.", 403);
          requireValue((req.headers["content-type"] || "").split(";")[0] === "application/json", "\u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F JSON.", 415);
          let input;
          try {
            input = JSON.parse(await requestBody(req));
          } catch (error) {
            if (error instanceof PanelError) throw error;
            throw new PanelError(400, "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441.");
          }
          requireValue(input && typeof input === "object" && !Array.isArray(input), "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441.");
          if (path === "/api/logout") {
            res.setHeader("Set-Cookie", cookie(COOKIE, "", 0, "Lax"));
            return respond(200, { ok: true });
          }
          const result = await command(path.slice(5), input, {
            store: extensionStore(context.storage),
            api: (services.management || management)(session.management),
            actor: session.actor,
            now
          });
          return respond(200, result);
        } catch (error) {
          return respond(
            error instanceof PanelError ? error.status : 503,
            { error: error instanceof PanelError ? error.message : "\u041F\u0430\u043D\u0435\u043B\u044C \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441." }
          );
        }
      };
    }
    module2.exports = { BASE, CALLBACK, PERMISSIONS, createHandler: createHandler2, verifyDashboard };
  }
});

// webtask.cjs
init_define_PANEL_ASSETS();
var { createHandler } = require_dashboard();
var handler = createHandler(define_PANEL_ASSETS_default);
module.exports = (context, req, res) => handler(context, req, res);
