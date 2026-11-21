<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#131A2A">
<meta name="robots" content="noindex,nofollow">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com data:; img-src 'self' data:; connect-src https://script.google.com https://script.googleusercontent.com; base-uri 'none'; form-action 'none'; object-src 'none'">
<title>แดชบอร์ดผู้ดูแล | ลงชื่อรับรองการรับชมสื่ออัคคีภัย</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root{--fire1:#FF6B35;--fire2:#E53935;--ink:#131A2A;--ink2:#5A6478;--line:#E8EBF2;--bg:#F6F7FB;
  --ok:#16A34A;--okbg:#E8F7EE;--bad:#DC2626;--safe-b:env(safe-area-inset-bottom,0px)}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
body{font-family:'Kanit',-apple-system,BlinkMacSystemFont,sans-serif;background:var(--bg);color:var(--ink);
  font-size:15px;line-height:1.5;-webkit-text-size-adjust:100%}
.bar{position:sticky;top:0;z-index:20;background:#fff;border-bottom:1px solid var(--line);
  padding:calc(11px + env(safe-area-inset-top,0px)) 16px 11px;display:flex;align-items:center;gap:11px;flex-wrap:wrap}
.bar .lg{display:flex;align-items:center;gap:9px;font-size:14px;font-weight:500}
.bar .lg u{width:31px;height:31px;border-radius:10px;background:linear-gradient(135deg,var(--fire1),var(--fire2));
  display:grid;place-items:center;color:#fff;font-size:13px;text-decoration:none;flex:none}
.bar .who{margin-left:auto;display:flex;align-items:center;gap:9px;font-size:11.5px;color:var(--ink2);font-weight:300}
.bar .who i{width:29px;height:29px;border-radius:50%;background:#2B3650;color:#fff;display:grid;place-items:center;
  font-size:10.5px;font-weight:500;font-style:normal;flex:none}
.adm{font-size:9.5px;background:#EEF2FF;color:#4F46E5;padding:3px 9px;border-radius:999px;font-weight:500}
.out{font-size:11.5px;color:var(--ink2);font-weight:300;border:1px solid var(--line);background:#fff;
  border-radius:10px;padding:7px 11px;cursor:pointer;font-family:inherit}
main{padding:16px 16px calc(30px + var(--safe-b));max-width:1240px;margin:0 auto}
section{display:none} section.on{display:block}

/* login */
.lwrap{max-width:400px;margin:8vh auto 0}
.card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:18px}
h2.ttl{font-size:19px;font-weight:600;margin-bottom:6px}
p.sub{font-size:12.5px;color:var(--ink2);font-weight:300;line-height:1.6}
label{font-size:12px;color:var(--ink2);font-weight:400;display:block;margin:0 0 6px 2px}
input,select{width:100%;height:48px;border:1px solid var(--line);background:#fff;border-radius:13px;padding:0 13px;
  font-family:inherit;font-size:16px;color:var(--ink);margin-bottom:12px;outline:none;appearance:none}
input:focus,select:focus{border-color:var(--fire2);box-shadow:0 0 0 3px rgba(229,57,53,.1)}
.btn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;min-height:50px;border-radius:14px;
  background:linear-gradient(135deg,var(--fire1),var(--fire2));color:#fff;font-size:15px;font-weight:500;border:0;
  font-family:inherit;cursor:pointer;box-shadow:0 10px 22px -12px rgba(229,57,53,.8)}
.btn.sm{min-height:40px;font-size:13px;border-radius:12px;padding:0 15px;width:auto;box-shadow:none}
.btn.ghost{background:#fff;color:var(--ink);border:1px solid var(--line);box-shadow:none}

/* kpi */
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:11px;margin-bottom:14px}
.kpi{background:#fff;border:1px solid var(--line);border-radius:16px;padding:13px 14px}
.kpi p{font-size:10.5px;color:var(--ink2);font-weight:300}
.kpi b{font-size:23px;font-weight:600;display:block;margin-top:3px;line-height:1.1}
.kpi s{text-decoration:none;font-size:10px;font-weight:400;color:var(--ink2)}
.c-ok b{color:var(--ok)} .c-bad b{color:var(--bad)} .c-wait b{color:#C2410C} .c-idle b{color:#4F46E5}

/* filters */
.filters{background:#fff;border:1px solid var(--line);border-radius:16px;padding:12px;margin-bottom:13px;
  display:flex;gap:9px;align-items:center;flex-wrap:wrap}
.chip{height:38px;border:1px solid var(--line);border-radius:11px;display:flex;align-items:center;gap:6px;
  padding:0 13px;font-size:12.5px;font-weight:300;color:var(--ink2);background:#fff;cursor:pointer;font-family:inherit}
.chip.on{border-color:var(--fire2);color:var(--fire2);background:#FFF4F1;font-weight:500}
.filters input,.filters select{height:38px;margin:0;border-radius:11px;font-size:13px;width:auto;min-width:130px}
.filters .grow{flex:1;min-width:150px}
.fx{margin-left:auto;display:flex;gap:9px}

/* table */
.tbl{background:#fff;border:1px solid var(--line);border-radius:16px;overflow:hidden}
.scrollx{overflow-x:auto;-webkit-overflow-scrolling:touch}
table{width:100%;border-collapse:collapse;min-width:860px}
th{text-align:left;font-size:10.5px;font-weight:500;color:var(--ink2);padding:11px 13px;background:#FAFBFD;
  border-bottom:1px solid var(--line);white-space:nowrap;position:sticky;top:0;cursor:pointer}
td{font-size:12.5px;font-weight:300;padding:11px 13px;border-bottom:1px solid #F1F3F8;white-space:nowrap}
tr:last-child td{border-bottom:0}
td b{font-weight:500}
.pill{font-size:9.5px;font-weight:500;padding:3px 9px;border-radius:999px;display:inline-block}
.pill.p{background:var(--okbg);color:var(--ok)}
.pill.f{background:#FEF2F2;color:var(--bad)}
.pill.w{background:#FFF1E8;color:#C2410C}
.pill.n{background:#EEF2FF;color:#4F46E5}
.flag{font-size:9.5px;color:var(--bad);font-weight:400}
.mini{display:inline-flex;align-items:center;gap:5px}
.mini span{width:46px;height:6px;background:#EDEFF5;border-radius:9px;display:inline-block;overflow:hidden}
.mini span i{display:block;height:100%;background:linear-gradient(90deg,var(--fire1),var(--fire2))}
.tnote{padding:11px 13px;font-size:11px;color:var(--ink2);font-weight:300;display:flex;justify-content:space-between;
  align-items:center;gap:10px;flex-wrap:wrap}
.spin{width:32px;height:32px;border:3px solid var(--line);border-top-color:var(--fire2);border-radius:50%;
  margin:36px auto;animation:sp .8s linear infinite}
@keyframes sp{to{transform:rotate(360deg)}}
#toast{position:fixed;left:50%;bottom:calc(20px + var(--safe-b));transform:translate(-50%,24px);z-index:90;
  background:#131A2A;color:#fff;font-size:12.5px;font-weight:300;padding:12px 18px;border-radius:14px;max-width:88vw;
  text-align:center;opacity:0;pointer-events:none;transition:.25s}
#toast.on{opacity:1;transform:translate(-50%,0)}

/* มือถือ: ตารางเป็นการ์ด */
@media(max-width:700px){
  table{min-width:0}
  thead{display:none}
  tr{display:block;border-bottom:1px solid #F1F3F8;padding:11px 13px}
  tr:last-child{border:0}
  td{display:flex;justify-content:space-between;gap:12px;border:0;padding:3px 0;white-space:normal;font-size:12.5px}
  td::before{content:attr(data-h);color:var(--ink2);font-size:11px;font-weight:300;flex:none}
  td:first-child{font-weight:500;font-size:14px;padding-bottom:6px}
  .filters .fx{width:100%}
  .filters .fx .btn{flex:1}
}
</style>
</head>
<body>

<div class="bar">
  <div class="lg"><u>▦</u> แดชบอร์ดผู้ดูแล</div>
  <div class="who" id="who" style="display:none">
    <span class="adm" id="role">ADMIN</span>
    <i id="initials">—</i><span id="aname">—</span>
    <button class="out" id="btnOut" type="button">ออกจากระบบ</button>
  </div>
</div>

<main>
  <!-- login -->
  <section id="s-login" class="on">
    <div class="lwrap">
      <h2 class="ttl">เข้าสู่ระบบผู้ดูแล</h2>
      <p class="sub" style="margin-bottom:16px">สำหรับเจ้าหน้าที่หน่วยกายภาพที่ได้รับสิทธิ์เท่านั้น</p>
      <div class="card">
        <label for="fEmail">ชื่อผู้ใช้</label>
        <input id="fEmail" type="text" autocomplete="username" maxlength="100" placeholder="admin1">
        <label for="fPw">รหัสผ่าน</label>
        <input id="fPw" type="password" autocomplete="current-password" maxlength="100" placeholder="••••••••">
        <button class="btn" id="btnLogin" type="button">เข้าสู่ระบบ</button>
        <p class="sub" style="margin-top:12px;font-size:11px">ป้อนรหัสผ่านผิดเกิน 5 ครั้ง ระบบจะระงับบัญชีชั่วคราว 15 นาที</p>
      </div>
    </div>
  </section>

  <!-- dashboard -->
  <section id="s-dash">
    <div class="kpis" id="kpis"></div>

    <div class="filters">
      <button class="chip on" data-y="" type="button">ทุกชั้นปี</button>
      <button class="chip" data-y="3" type="button">ชั้นปี 3</button>
      <button class="chip" data-y="4" type="button">ชั้นปี 4</button>
      <select id="fStatus">
        <option value="">ทุกสถานะ</option>
        <option value="PASSED">ผ่าน</option>
        <option value="FAILED">ไม่ผ่าน</option>
        <option value="WATCHING">กำลังรับชม</option>
        <option value="NOT_STARTED">ยังไม่เริ่ม</option>
      </select>
      <input id="fFrom" type="date" title="ตั้งแต่วันที่">
      <input id="fTo" type="date" title="ถึงวันที่">
      <input id="fQ" class="grow" type="search" placeholder="ค้นหารหัส / ชื่อ / เลขที่ใบประกาศ">
      <div class="fx">
        <button class="btn sm ghost" id="btnCsv" type="button">⬇ CSV</button>
        <button class="btn sm" id="btnReload" type="button">↻ โหลดข้อมูล</button>
      </div>
    </div>

    <div class="tbl">
      <div class="scrollx">
        <table>
          <thead><tr id="thead"></tr></thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>
      <div class="tnote"><span id="cnt">—</span><span id="gen">—</span></div>
    </div>
  </section>
</main>

<div id="toast"></div>

<script>
/* ===== วาง URL ของ Apps Script Web App (ลงท้าย /exec) ให้ตรงกับ index.html ===== */
var API = 'https://script.google.com/macros/s/AKfycbwgBDtMQH9k0R4UjdokDJgtf6x5kJxZgLc1ucMrVsriYP4nWR5JArCBIxSlYfGYfuCu/exec';

var $ = function (id) { return document.getElementById(id); };
var KEY = 'rson_fire_admin';
var ST = { token: '', admin: null, rows: [], sum: null, meta: null, year: '', sortKey: 'studentId', sortDir: 1 };

var COLS = [
  ['studentId', 'รหัส'], ['name', 'ชื่อ–นามสกุล'], ['year', 'ชั้นปี'], ['consentAt', 'ยินยอม PDPA'],
  ['percent', '% การรับชม'], ['score', 'คะแนน'], ['attempts', 'ครั้งที่ทำ'],
  ['signedAt', 'เวลาลงชื่อ'], ['status', 'สถานะ'], ['certNo', 'เลขที่ใบประกาศ']
];
var LABEL = { PASSED: ['ผ่าน', 'p'], FAILED: ['ไม่ผ่าน', 'f'], WATCHING: ['กำลังรับชม', 'w'], NOT_STARTED: ['ยังไม่เริ่ม', 'n'] };

function toast(m, ms) {
  var t = $('toast'); t.textContent = m; t.className = 'on';
  clearTimeout(toast._t); toast._t = setTimeout(function () { t.className = ''; }, ms || 3000);
}
function show(id) {
  document.querySelectorAll('main > section').forEach(function (s) { s.className = ''; });
  $(id).className = 'on';
}
function api(action, data) {
  var body = data || {}; body.action = action;
  if (ST.token && !body.token) body.token = ST.token;
  return fetch(API, { method: 'POST', body: JSON.stringify(body), redirect: 'follow' })
    .then(function (r) { return r.json(); })
    .then(function (res) {
      if (res && res.ok === false && (res.error === 'UNAUTHORIZED' || res.error === 'EXPIRED')) {
        logout(true); toast(res.message || 'เซสชันหมดอายุ');
      }
      return res || { ok: false };
    })
    .catch(function () { return { ok: false, message: 'เชื่อมต่อไม่ได้' }; });
}
function dt(iso) {
  if (!iso) return '—';
  var d = new Date(iso);
  if (isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('th-TH', { day: '2-digit', month: 'short' }) + ' ' +
         d.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
}

/* ------------------------------ auth ------------------------------- */
$('btnLogin').addEventListener('click', doLogin);
$('fPw').addEventListener('keydown', function (e) { if (e.key === 'Enter') doLogin(); });

function doLogin() {
  var em = $('fEmail').value.trim(), pw = $('fPw').value;
  if (!em || !pw) return toast('กรอกอีเมลและรหัสผ่าน');
  var b = $('btnLogin'); b.disabled = true; b.textContent = 'กำลังตรวจสอบ…';
  api('adminLogin', { email: em, password: pw }).then(function (r) {
    b.disabled = false; b.textContent = 'เข้าสู่ระบบ';
    $('fPw').value = '';
    if (!r.ok) return toast(r.message || 'เข้าสู่ระบบไม่สำเร็จ');
    ST.token = r.token; ST.admin = r.admin;
    try { sessionStorage.setItem(KEY, r.token); } catch (e) {}
    afterLogin(); load();
  });
}
function afterLogin() {
  $('who').style.display = '';
  $('aname').textContent = (ST.admin && ST.admin.name) || '';
  $('role').textContent = ((ST.admin && ST.admin.role) || 'admin').toUpperCase();
  var n = ((ST.admin && ST.admin.name) || '??').trim().split(/\s+/);
  $('initials').textContent = (n[0] || '?').slice(0, 1) + (n[1] || '').slice(0, 1);
  show('s-dash');
}
function logout(silent) {
  ST.token = ''; ST.admin = null; ST.rows = [];
  try { sessionStorage.removeItem(KEY); } catch (e) {}
  $('who').style.display = 'none';
  show('s-login');
  if (!silent) toast('ออกจากระบบแล้ว');
}
$('btnOut').addEventListener('click', function () { logout(); });

/* ------------------------------ data ------------------------------- */
function load() {
  $('tbody').textContent = '';
  $('cnt').textContent = 'กำลังโหลด…';
  api('adminData', {}).then(function (r) {
    if (!r.ok) return toast(r.message || 'โหลดข้อมูลไม่สำเร็จ');
    ST.rows = r.rows || []; ST.sum = r.summary; ST.meta = r.meta;
    paintKpi(); paint();
  });
}
$('btnReload').addEventListener('click', load);

function paintKpi() {
  var s = ST.sum || {}, box = $('kpis'); box.textContent = '';
  var pct = s.total ? Math.round((s.passed / s.total) * 100) : 0;
  [['นักศึกษาในระบบ', s.total || 0, 'ปี 3 · ' + (s.y3 || 0) + '   ปี 4 · ' + (s.y4 || 0), ''],
   ['ผ่านแล้ว (เต็ม)', s.passed || 0, pct + '% ของทั้งหมด', 'c-ok'],
   ['ไม่ผ่าน (ต้องทำซ้ำ)', s.failed || 0, 'ติดตามผล', 'c-bad'],
   ['กำลังรับชม', s.watching || 0, 'ยังไม่ครบเกณฑ์', 'c-wait'],
   ['ยังไม่เริ่ม', s.notStarted || 0, 'ครบกำหนด ' + ((ST.meta && ST.meta.deadline) || '—'), 'c-idle'],
   ['พบความพยายามเลื่อนข้าม', s.flagged || 0, 'ระบบบล็อกไว้แล้ว', 'c-bad']
  ].forEach(function (k) {
    var d = document.createElement('div'); d.className = 'kpi ' + k[3];
    var p = document.createElement('p'); p.textContent = k[0];
    var b = document.createElement('b'); b.textContent = k[1];
    var s2 = document.createElement('s'); s2.textContent = k[2];
    d.appendChild(p); d.appendChild(b); d.appendChild(s2); box.appendChild(d);
  });
}

document.querySelectorAll('.chip').forEach(function (c) {
  c.addEventListener('click', function () {
    ST.year = c.getAttribute('data-y') || '';
    document.querySelectorAll('.chip').forEach(function (x) { x.className = 'chip'; });
    c.className = 'chip on';
    paint();
  });
});
['fStatus', 'fQ', 'fFrom', 'fTo'].forEach(function (id) {
  $(id).addEventListener('input', paint);
  $(id).addEventListener('change', paint);
});

function filtered() {
  var q = $('fQ').value.trim().toLowerCase();
  var st = $('fStatus').value;
  var from = $('fFrom').value ? new Date($('fFrom').value + 'T00:00:00').getTime() : 0;
  var to   = $('fTo').value ? new Date($('fTo').value + 'T23:59:59').getTime() : 0;

  var out = ST.rows.filter(function (r) {
    if (ST.year && String(r.year) !== ST.year) return false;
    if (st && r.status !== st) return false;
    if (from || to) {
      var t = r.signedAt ? new Date(r.signedAt).getTime() : 0;
      if (!t) return false;
      if (from && t < from) return false;
      if (to && t > to) return false;
    }
    if (q) {
      var hay = (r.studentId + ' ' + r.name + ' ' + (r.certNo || '')).toLowerCase();
      if (hay.indexOf(q) < 0) return false;
    }
    return true;
  });
  var k = ST.sortKey, dir = ST.sortDir;
  out.sort(function (a, b) {
    var x = a[k], y = b[k];
    if (typeof x === 'number' && typeof y === 'number') return (x - y) * dir;
    return String(x).localeCompare(String(y), 'th') * dir;
  });
  return out;
}

function paint() {
  var th = $('thead'); th.textContent = '';
  COLS.forEach(function (c) {
    var e = document.createElement('th');
    e.textContent = c[1] + (ST.sortKey === c[0] ? (ST.sortDir > 0 ? ' ▲' : ' ▼') : '');
    e.addEventListener('click', function () {
      if (ST.sortKey === c[0]) ST.sortDir *= -1; else { ST.sortKey = c[0]; ST.sortDir = 1; }
      paint();
    });
    th.appendChild(e);
  });

  var rows = filtered(), tb = $('tbody'); tb.textContent = '';
  rows.forEach(function (r) {
    var tr = document.createElement('tr');
    COLS.forEach(function (c) {
      var td = document.createElement('td');
      td.setAttribute('data-h', c[1]);
      var k = c[0];
      if (k === 'percent') {
        var m = document.createElement('span'); m.className = 'mini';
        var ba = document.createElement('span'); var i = document.createElement('i');
        i.style.width = Math.min(100, r.percent) + '%'; ba.appendChild(i);
        var tx = document.createElement('b'); tx.textContent = r.percent + '%';
        m.appendChild(ba); m.appendChild(tx); td.appendChild(m);
      } else if (k === 'status') {
        var l = LABEL[r.status] || [r.status, 'n'];
        var p = document.createElement('span'); p.className = 'pill ' + l[1]; p.textContent = l[0];
        td.appendChild(p);
        if (r.seekBlocked > 0) {
          var f = document.createElement('div'); f.className = 'flag';
          f.textContent = '⚠ เลื่อนข้าม ' + r.seekBlocked + ' ครั้ง'; td.appendChild(f);
        }
      } else if (k === 'consentAt' || k === 'signedAt') {
        td.textContent = dt(r[k]);
      } else {
        td.textContent = (r[k] === '' || r[k] == null) ? '—' : String(r[k]);
      }
      tr.appendChild(td);
    });
    tb.appendChild(tr);
  });

  $('cnt').textContent = 'แสดง ' + rows.length + ' จาก ' + ST.rows.length + ' รายการ';
  $('gen').textContent = 'ข้อมูล ณ ' + dt((ST.meta && ST.meta.generatedAt) || new Date().toISOString());
}

/* ------------------------------- CSV ------------------------------- */
$('btnCsv').addEventListener('click', function () {
  var rows = filtered();
  if (!rows.length) return toast('ไม่มีข้อมูลให้ส่งออก');
  var head = COLS.map(function (c) { return c[1]; }).concat(['บล็อกการเลื่อนข้าม (ครั้ง)']);
  var lines = [head.join(',')];
  rows.forEach(function (r) {
    var v = COLS.map(function (c) {
      var x = r[c[0]];
      if (c[0] === 'status') x = (LABEL[r.status] || [r.status])[0];
      if (c[0] === 'percent') x = r.percent + '%';
      if (c[0] === 'consentAt' || c[0] === 'signedAt') x = r[c[0]] ? new Date(r[c[0]]).toLocaleString('th-TH') : '';
      return csv(x);
    }).concat([csv(r.seekBlocked)]);
    lines.push(v.join(','));
  });
  var blob = new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'fire-safety-attendance-' + new Date().toISOString().slice(0, 10) + '.csv';
  a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500);
});
/* ป้องกัน CSV formula injection เมื่อเปิดด้วย Excel */
function csv(v) {
  var s = (v === null || v === undefined) ? '' : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return '"' + s.replace(/"/g, '""') + '"';
}

/* ------------------------------- boot ------------------------------ */
(function () {
  if (API.indexOf('XXXX') > -1) { toast('ยังไม่ได้ตั้งค่า API ในไฟล์ admin.html', 8000); return; }
  var t = '';
  try { t = sessionStorage.getItem(KEY) || ''; } catch (e) {}
  if (!t) return;
  ST.token = t;
  api('adminData', {}).then(function (r) {
    if (!r.ok) { logout(true); return; }
    ST.admin = r.admin; ST.rows = r.rows || []; ST.sum = r.summary; ST.meta = r.meta;
    afterLogin(); paintKpi(); paint();
  });
})();
</script>
</body>
</html>