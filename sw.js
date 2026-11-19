/* Hoa Vinh City · trợ lý thông báo (v68). Không lưu đệm trang, chỉ hiện thông báo và mở app khi bấm. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil((async()=>{const ds=await self.clients.matchAll({type:'window',includeUncontrolled:true});
 for(const c of ds){if('focus' in c)return c.focus()}if(self.clients.openWindow)return self.clients.openWindow('./')})())});
