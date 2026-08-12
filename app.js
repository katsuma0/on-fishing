/* Appearance: honour the system by default; an in-app toggle can pin light or dark. */
/* Appearance: honour the system by default; an in-app toggle can pin light or dark. */
(function(){try{var a=localStorage.getItem('onfish-appearance');if(a==='light'||a==='dark')document.documentElement.setAttribute('data-theme',a);}catch(e){}})();

/* REG loaded from data/ */
/* FISH_ID loaded from data/ */
const SJ_THEMES = [ /* all light or medium and bold; the Wildlands alone keeps the dark */
  {id:'aaron', name:'Aaron', paper:'#F1F6F1', ink:'#0F1F17', primary:'#2E6FB0'},
  {id:'algonquinachray', name:'Achray', paper:'#F1F6F1', ink:'#0F1F17', primary:'#B2571A'},
  {id:'arrowhead', name:'Arrowhead', paper:'#F1F6F1', ink:'#0F1F17', primary:'#7A4FB0'},
  {id:'awenda', name:'Awenda', paper:'#F1F6F1', ink:'#0F1F17', primary:'#0E8A8A'},
  {id:'balsamlake', name:'Balsam Lake', paper:'#F3F4F7', ink:'#191F2E', primary:'#344E98'},
  {id:'basslake', name:'Bass Lake', paper:'#F3F4F7', ink:'#19222E', primary:'#345D98'},
  {id:'batchawanabay', name:'Batchawana Bay', paper:'#EBF2F5', ink:'#17262B', primary:'#2C738C'},
  {id:'bluelake', name:'Blue Lake', paper:'#EBF3F8', ink:'#1D2A33', primary:'#146EB8'},
  {id:'bonecho', name:'Bon Echo', paper:'#EBF0F5', ink:'#17212B', primary:'#325D85'},
  {id:'bonnechere', name:'Bonnechere', paper:'#F3F7F6', ink:'#192E29', primary:'#39937D'},
  {id:'boynevalley', name:'Boyne Valley', paper:'#F3F7F3', ink:'#1C2E19', primary:'#479339'},
  {id:'algonquinbrent', name:'Brent', paper:'#F7F5F3', ink:'#2E2519', primary:'#986B34'},
  {id:'brontecreek', name:'Bronte Creek', paper:'#F2F0F7', ink:'#20192E', primary:'#513097'},
  {id:'caliperlake', name:'Caliper Lake', paper:'#F0F2F7', ink:'#191F2E', primary:'#2448A3'},
  {id:'algonquincanisbay', name:'Canisbay', paper:'#F0F5F7', ink:'#19272E', primary:'#1E7BA9'},
  {id:'charlestonlake', name:'Charleston Lake', paper:'#F0F2F7', ink:'#19202E', primary:'#244CA3'},
  {id:'chutes', name:'Chutes', paper:'#F5F7F0', ink:'#272E19', primary:'#79A324'},
  {id:'craigleith', name:'Craigleith', paper:'#F7F0F6', ink:'#2E192C', primary:'#913686'},
  {id:'darlington', name:'Darlington', paper:'#F7F0F0', ink:'#2E1919', primary:'#9D2A2B'},
  {id:'devilsglen', name:'Devils Glen', paper:'#F6F7F0', ink:'#2D2E19', primary:'#99A324'},
  {id:'driftwood', name:'Driftwood', paper:'#F0F0F7', ink:'#1A192E', primary:'#2E2A9D'},
  {id:'earlrowe', name:'Earl Rowe', paper:'#F0F7F2', ink:'#192E1E', primary:'#1EA93B'},
  {id:'emily', name:'Emily', paper:'#F0F7F5', ink:'#192E27', primary:'#2A9D76'},
  {id:'eskerlakes', name:'Esker Lakes', paper:'#F2F0F6', ink:'#272334', primary:'#4C3E8E'},
  {id:'fairbank', name:'Fairbank', paper:'#F1F7F0', ink:'#1B2E19', primary:'#379D2A'},
  {id:'ferris', name:'Ferris', paper:'#F7F4F0', ink:'#2E2519', primary:'#A36E24'},
  {id:'finlaysonpoint', name:'Finlayson Point', paper:'#ECF6F5', ink:'#192E2C', primary:'#1C9B8E'},
  {id:'fitzroy', name:'Fitzroy', paper:'#EFEBF5', ink:'#21172B', primary:'#5A3285'},
  {id:'forksofthecredit', name:'Forks of the Credit', paper:'#F2F6EC', ink:'#262E19', primary:'#6AA216'},
  {id:'frenchriver', name:'French River', paper:'#EBF0F5', ink:'#17222B', primary:'#235E95'},
  {id:'frontenac', name:'Frontenac', paper:'#F5EBF4', ink:'#2B172B', primary:'#853283'},
  {id:'fushimilake', name:'Fushimi Lake', paper:'#EDEBF5', ink:'#1C172B', primary:'#422C8C'},
  {id:'grundy', name:'Grundy Lake', paper:'#FBF3DF', ink:'#241A08', primary:'#B4700A'},
  {id:'halfwaylake', name:'Halfway Lake', paper:'#EBEEF5', ink:'#171E2B', primary:'#294D8F'},
  {id:'inverhuron', name:'Inverhuron', paper:'#F6ECEC', ink:'#2E1919', primary:'#9B1C1F'},
  {id:'ivanhoelake', name:'Ivanhoe Lake', paper:'#ECF0F6', ink:'#19212E', primary:'#164CA2'},
  {id:'johnepearce', name:'John E. Pearce', paper:'#F3F5EB', ink:'#272B17', primary:'#7A8F29'},
  {id:'kakabekafalls', name:'Kakabeka Falls', paper:'#ECF3F6', ink:'#19292E', primary:'#1280A5'},
  {id:'kawarthahighlands', name:'Kawartha Highlands', paper:'#EBF3F5', ink:'#17272B', primary:'#327685'},
  {id:'algonquinkearney', name:'Kearney Lake', paper:'#EBEFF5', ink:'#17202B', primary:'#29568F'},
  {id:'kettlelakes', name:'Kettle Lakes', paper:'#EBF5ED', ink:'#172B1B', primary:'#328542'},
  {id:'killarney', name:'Killarney', paper:'#F6FAFA', ink:'#1D2B2E', primary:'#22A3B4'},
  {id:'killbear', name:'Killbear', paper:'#EBEBF5', ink:'#17192B', primary:'#2E348A'},
  {id:'algonquinkiosk', name:'Kiosk', paper:'#ECF6F0', ink:'#192E21', primary:'#12A54B'},
  {id:'komoka', name:'Komoka', paper:'#ECF6F2', ink:'#192E25', primary:'#1C9B64'},
  {id:'algonquintworivers', name:'Lake of Two Rivers', paper:'#EBF3F5', ink:'#17282B', primary:'#297F8F'},
  {id:'lakestpeter', name:'Lake St. Peter', paper:'#ECF0F6', ink:'#19222E', primary:'#1652A2'},
  {id:'lakesuperior', name:'Lake Superior', paper:'#EBF1F5', ink:'#17242B', primary:'#2D678B'},
  {id:'longpoint', name:'Long Point', paper:'#EBF5F3', ink:'#172B27', primary:'#2E8A77'},
  {id:'macgregorpoint', name:'MacGregor Point', paper:'#ECF6F5', ink:'#192E2D', primary:'#1C9B90'},
  {id:'macleod', name:'MacLeod', paper:'#ECF6EC', ink:'#192E19', primary:'#1F9B1C'},
  {id:'makobegrays', name:'Makobe-Grays', paper:'#F5F2EB', ink:'#2C2921', primary:'#A86224'},
  {id:'mara', name:'Mara', paper:'#F6F1EC', ink:'#2E2419', primary:'#A26016'},
  {id:'markburnham', name:'Mark S. Burnham', paper:'#EFECF6', ink:'#1F192E', primary:'#452494'},
  {id:'martenriver', name:'Marten River', paper:'#EBF3F5', ink:'#17282B', primary:'#29818F'},
  {id:'mcraepoint', name:'McRae Point', paper:'#ECF6F4', ink:'#192E2A', primary:'#1C9B84'},
  {id:'algonquinmew', name:'Mew Lake', paper:'#ECEFF6', ink:'#19202E', primary:'#1644A2'},
  {id:'mikisew', name:'Mikisew', paper:'#EFF5EB', ink:'#1F2B17', primary:'#538F29'},
  {id:'miserybay', name:'Misery Bay', paper:'#ECF2F6', ink:'#19262E', primary:'#126BA5'},
  {id:'missinaibi', name:'Missinaibi', paper:'#EBF3F5', ink:'#17282B', primary:'#2B7B8D'},
  {id:'mississagi', name:'Mississagi', paper:'#F5EBF4', ink:'#2B172A', primary:'#85327F'},
  {id:'monocliffs', name:'Mono Cliffs', paper:'#F6ECED', ink:'#2E191A', primary:'#9B1C25'},
  {id:'murphyspoint', name:'Murphys Point', paper:'#ECF6F4', ink:'#192E2B', primary:'#1C9B86'},
  {id:'nagagamisis', name:'Nagagamisis', paper:'#F3F5EB', ink:'#282B17', primary:'#7F8F29'},
  {id:'neys', name:'Neys', paper:'#ECEEF6', ink:'#191D2E', primary:'#1C329B'},
  {id:'northbeach', name:'North Beach', paper:'#F6F5EC', ink:'#2E2B19', primary:'#A48F14'},
  {id:'oastlerlake', name:'Oastler Lake', paper:'#F5EFEB', ink:'#2B2117', primary:'#99591F'},
  {id:'obabikariver', name:'Obabika River', paper:'#EBF5ED', ink:'#172B1C', primary:'#328547'},
  {id:'ojibway', name:'Ojibway', paper:'#ECF6F0', ink:'#192E21', primary:'#12A549'},
  {id:'ouimetcanyon', name:'Ouimet Canyon', paper:'#EBEFF5', ink:'#17212B', primary:'#325A85'},
  {id:'pakwash', name:'Pakwash', paper:'#ECF6F3', ink:'#192E27', primary:'#1C9B71'},
  {id:'pancakebay', name:'Pancake Bay', paper:'#F7F1E3', ink:'#33291A', primary:'#C08A2E'},
  {id:'petroglyphs', name:'Petroglyphs', paper:'#F5F1EB', ink:'#2B2417', primary:'#8E682A'},
  {id:'pigeonriver', name:'Pigeon River', paper:'#ECF4F6', ink:'#192A2E', primary:'#1683A2'},
  {id:'pinery', name:'Pinery', paper:'#ECF3EB', ink:'#1F2F1E', primary:'#2E7A3D'},
  {id:'algonquinpog', name:'Pog Lake', paper:'#EBEDF5', ink:'#171C2B', primary:'#29428F'},
  {id:'pointfarms', name:'Point Farms', paper:'#ECF6F5', ink:'#192E2C', primary:'#1C9B8A'},
  {id:'portbruce', name:'Port Bruce', paper:'#EDF6EC', ink:'#1A2E19', primary:'#259B1C'},
  {id:'portburwell', name:'Port Burwell', paper:'#F5EEEB', ink:'#2B1E17', primary:'#8F4E29'},
  {id:'potholes', name:'Potholes', paper:'#F0ECF6', ink:'#22192E', primary:'#502494'},
  {id:'queenelizabethii', name:'QE II Wildlands', paper:'#0C120E', ink:'#DDE7DF', primary:'#2F6B4F', dark:true},
  {id:'quetico', name:'Quetico', paper:'#F3F5EB', ink:'#292B17', primary:'#7A8532'},
  {id:'algonquinraccoon', name:'Raccoon Lake', paper:'#ECEEF6', ink:'#191E2E', primary:'#1636A2'},
  {id:'oxtongueriver', name:'Ragged Falls', paper:'#ECF3F6', ink:'#19282E', primary:'#127CA5'},
  {id:'rainbowfalls', name:'Rainbow Falls', paper:'#F5F1F4', ink:'#2C242B', primary:'#923A79'},
  {id:'renebrunelle', name:'Rene Brunelle', paper:'#F2F6EC', ink:'#262E19', primary:'#6CA216'},
  {id:'restoule', name:'Restoule', paper:'#F6ECF4', ink:'#2E192B', primary:'#8D2A7E'},
  {id:'rideauriver', name:'Rideau River', paper:'#EBF5F4', ink:'#172B2B', primary:'#298F8C'},
  {id:'algonquinrock', name:'Rock Lake', paper:'#ECEFF6', ink:'#191F2E', primary:'#425175'},
  {id:'rockpoint', name:'Rock Point', paper:'#F1F2F3', ink:'#26292C', primary:'#51647B'},
  {id:'rondeau', name:'Rondeau', paper:'#F5EBEC', ink:'#2B171A', primary:'#8A2E3D'},
  {id:'rushingriver', name:'Rushing River', paper:'#ECF4F6', ink:'#192A2E', primary:'#1688A2'},
  {id:'samueldechamplain', name:'Samuel de Champlain', paper:'#F5F6EC', ink:'#2D2E19', primary:'#99A216'},
  {id:'sandbanks', name:'Sandbanks', paper:'#F8F4E8', ink:'#2E2A1C', primary:'#C9A143'},
  {id:'sandbarlake', name:'Sandbar Lake', paper:'#F7F3E6', ink:'#2D2A1C', primary:'#A88024'},
  {id:'saublefalls', name:'Sauble Falls', paper:'#EBF2F5', ink:'#17252B', primary:'#2C718C'},
  {id:'selkirk', name:'Selkirk', paper:'#EBECF5', ink:'#171B2B', primary:'#2E3E8A'},
  {id:'sharbotlake', name:'Sharbot Lake', paper:'#ECEFF6', ink:'#19202E', primary:'#1646A2'},
  {id:'shorthills', name:'Short Hills', paper:'#ECF6F0', ink:'#192E22', primary:'#12A54E'},
  {id:'sibbaldpoint', name:'Sibbald Point', paper:'#EBF5F3', ink:'#172B29', primary:'#2E8A7F'},
  {id:'silentlake', name:'Silent Lake', paper:'#ECEFF6', ink:'#191F2E', primary:'#163BA2'},
  {id:'silverfalls', name:'Silver Falls', paper:'#F2F4F4', ink:'#26292B', primary:'#476985'},
  {id:'silverlake', name:'Silver Lake', paper:'#F2F3F5', ink:'#272B31', primary:'#4E6C7E'},
  {id:'siouxnarrows', name:'Sioux Narrows', paper:'#ECF6F1', ink:'#192E24', primary:'#1C9B5D'},
  {id:'sixmilelake', name:'Six Mile Lake', paper:'#ECEDF6', ink:'#191C2E', primary:'#162BA2'},
  {id:'sleepinggiant', name:'Sleeping Giant', paper:'#EBEDF5', ink:'#171C2B', primary:'#324785'},
  {id:'solace', name:'Solace', paper:'#EBEEF5', ink:'#171D2B', primary:'#304A87'},
  {id:'spanishriver', name:'Spanish River', paper:'#ECF2F6', ink:'#19272E', primary:'#166EA2'},
  {id:'springwater', name:'Springwater', paper:'#EDF5EB', ink:'#1B2B17', primary:'#3F8A2E'},
  {id:'sturgeonbay', name:'Sturgeon Bay', paper:'#ECF1F6', ink:'#19242E', primary:'#125FA5'},
  {id:'sturgeonriver', name:'Sturgeon River', paper:'#ECF6F6', ink:'#192E2E', primary:'#16A2A2'},
  {id:'algonquintea', name:'Tea Lake', paper:'#F5EFE5', ink:'#33271A', primary:'#8A5C33'},
  {id:'themassasauga', name:'The Massasauga', paper:'#F6F1EE', ink:'#31261F', primary:'#A23D2A'},
  {id:'tidewater', name:'Tidewater', paper:'#EBF2F5', ink:'#17272B', primary:'#287990'},
  {id:'turkeypoint', name:'Turkey Point', paper:'#EBF4F5', ink:'#172A2B', primary:'#2E868A'},
  {id:'voyageur', name:'Voyageur', paper:'#F7F1EA', ink:'#33241C', primary:'#B0562F'},
  {id:'wabakimi', name:'Wabakimi', paper:'#EBF5F1', ink:'#172B24', primary:'#328568'},
  {id:'wakamilake', name:'Wakami Lake', paper:'#EBEFF5', ink:'#171F2B', primary:'#29538F'},
  {id:'wasagabeach', name:'Wasaga Beach', paper:'#F7F3E8', ink:'#2E2A1F', primary:'#D9A441'},
  {id:'wheatley', name:'Wheatley', paper:'#F6EFEC', ink:'#2E2019', primary:'#A24616'},
  {id:'whitelake', name:'White Lake', paper:'#EBEEF5', ink:'#171E2B', primary:'#294B8F'},
  {id:'windylake', name:'Windy Lake', paper:'#ECEEF6', ink:'#191E2E', primary:'#1635A2'},
  {id:'woodlandcaribou', name:'Woodland Caribou', paper:'#F5F0EB', ink:'#2B2217', primary:'#8F6229'}
];
const EMBED = /embed=parks/.test(location.hash||'');
/* dark mode darkens the map too (the system, or the in-app Appearance toggle) */
function fishPrefersDark(){ return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches); }
function fishAppearance(){ try{ return localStorage.getItem('onfish-appearance')||'auto'; }catch(e){ return 'auto'; } }
const THEME_DARK=(function(){ var a=fishAppearance(); return a==='dark' || (a==='auto' && fishPrefersDark()); })();
if(THEME_DARK) document.body.classList.add('darkmap');

/* haptics, same feel as Site Journal: native inside the app, vibration elsewhere */
let _lastBuzz=0;
function buzz(ms){
  const n=Date.now(); if(n-_lastBuzz<80) return; _lastBuzz=n;
  try{ const C=window.Capacitor;
    if(C&&C.Plugins&&C.Plugins.Haptics){ C.Plugins.Haptics.impact({style:'LIGHT'}); return; }
  }catch(e){}
  try{ if(navigator.vibrate) navigator.vibrate(ms); }catch(e){} }
document.addEventListener('click',function(e){
  if(e.target&&e.target.closest&&e.target.closest('button,.srow,.trow,.fcard,.frow,.cell,.fmz')) buzz(5);
},{capture:true});
const SERVICE = "https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/LIO_OPEN_DATA/LIO_Open07/MapServer/14";
const ZONE_FIELD = "FISHERIES_MANAGEMENT_ZONE_ID";

// Light natural hues (green, brown, purple, olive, clay) cycled so neighbouring
// zones contrast where they touch.
const TINT=['#CDE1D0','#E2D6C0','#EBDCA8','#DFE3C6','#E9CFC0','#E5C9A5'];

// Well known Ontario waters. The zone is worked out at runtime by testing the
// point against the real zone boundaries, so nothing is hard coded.
const WATER=[
 ["Lake Superior",48.60,-87.30],["Lake Huron",44.80,-82.20],["Georgian Bay",45.30,-80.90],
 ["North Channel",46.05,-82.60],["Lake Erie",42.25,-81.00],["Lake Ontario",43.70,-78.10],
 ["Lake St. Clair",42.40,-82.70],["St. Lawrence River",44.55,-75.75],["Bay of Quinte",44.15,-77.25],
 ["Niagara River",43.10,-79.05],["Detroit River",42.15,-83.10],["Long Point Bay",42.60,-80.30],
 ["Lake of the Woods",49.30,-94.60],["Rainy Lake",48.65,-93.20],["Lac Seul",50.35,-92.30],
 ["Eagle Lake (Dryden)",49.75,-93.20],["Wabigoon Lake",49.60,-92.70],["Red Lake",51.05,-93.80],
 ["Lake St. Joseph",51.05,-90.80],["Big Vermilion Lake",50.03,-92.22],["Dinorwic Lake",49.63,-92.55],
 ["Minnitaki Lake",49.97,-91.95],["Winnipeg River",49.90,-94.80],
 ["Lake Nipigon",49.83,-88.50],["Nipigon River",49.00,-88.25],["Thunder Bay",48.40,-89.15],
 ["Black Bay",48.65,-88.45],["Shebandowan Lake",48.62,-90.15],["Dog Lake (Thunder Bay)",48.72,-89.55],
 ["Lake Abitibi",48.70,-79.90],["Lake Temiskaming",47.30,-79.50],
 ["Kabinakagami Lake",48.85,-84.35],["Nagagami Lake",49.45,-84.60],["Missinaibi Lake",48.30,-83.65],
 ["Michipicoten River",47.95,-84.90],["Groundhog River",49.20,-82.10],["Moose River",51.20,-80.60],
 ["Albany River",51.35,-85.00],["Attawapiskat River",52.60,-86.00],["Winisk River",54.50,-86.50],
 ["Severn River (north)",55.20,-88.30],
 ["Lake Nipissing",46.28,-79.80],["Lake Temagami",47.00,-80.07],["French River",46.00,-80.55],
 ["Lake Wanapitei",46.75,-80.75],["Ramsey Lake",46.47,-80.96],["Lake Panache",46.25,-81.35],
 ["Lake Nosbonsing",46.28,-79.10],["Trout Lake (North Bay)",46.32,-79.36],["Lake Talon",46.31,-79.09],
 ["Restoule Lake",46.06,-79.78],["Onaping Lake",46.87,-81.44],
 ["Lake Muskoka",45.00,-79.42],["Lake Rosseau",45.18,-79.60],["Lake Joseph",45.15,-79.73],
 ["Lake of Bays",45.28,-79.05],["Mary Lake",45.24,-79.28],["Fairy Lake",45.33,-79.19],
 ["Peninsula Lake",45.34,-79.14],["Vernon Lake",45.33,-79.26],["Skeleton Lake",45.24,-79.44],
 ["Three Mile Lake",45.17,-79.45],
 ["Lake Opeongo",45.70,-78.37],["Algonquin Park",45.60,-78.40],
 ["Kennisis Lake",45.22,-78.65],["Haliburton Lake",45.15,-78.50],["Lake Kashagawigamog",45.00,-78.55],
 ["Twelve Mile Lake",45.12,-78.68],["Boshkung Lake",45.06,-78.73],["Eagle Lake (Haliburton)",45.13,-78.52],
 ["Lake Simcoe",44.42,-79.35],["Lake Couchiching",44.65,-79.35],["Severn River",44.80,-79.60],
 ["Rice Lake",44.17,-78.20],["Lake Scugog",44.20,-78.85],["Balsam Lake",44.60,-78.85],
 ["Sturgeon Lake",44.47,-78.70],["Pigeon Lake",44.45,-78.50],["Stoney Lake",44.55,-78.15],
 ["Buckhorn Lake",44.48,-78.39],["Lower Buckhorn Lake",44.55,-78.49],["Lovesick Lake",44.55,-78.45],
 ["Chemong Lake",44.43,-78.38],["Katchewanooka Lake",44.41,-78.27],["Clear Lake (Kawarthas)",44.52,-78.24],
 ["Cameron Lake",44.55,-78.76],["Canal Lake",44.57,-79.02],["Mitchell Lake",44.57,-78.93],
 ["Dalrymple Lake",44.66,-79.10],["Trent River",44.30,-77.80],["Kawartha Lakes",44.45,-78.55],
 ["Ottawa River",45.55,-76.40],["Big Rideau Lake",44.72,-76.25],["Rideau River",45.10,-75.70],
 ["Charleston Lake",44.50,-76.05],["Bobs Lake",44.70,-76.60],["Madawaska River",45.50,-77.30],
 ["Loughborough Lake",44.38,-76.42],["Sydenham Lake",44.41,-76.58],["Devil Lake",44.58,-76.48],
 ["Newboro Lake",44.65,-76.32],["Upper Rideau Lake",44.68,-76.33],["Mississippi Lake",45.02,-76.20],
 ["White Lake (Lanark)",45.30,-76.52],["Calabogie Lake",45.29,-76.75],
 ["Grand River",43.30,-80.30],["Saugeen River",44.30,-81.20],["Nottawasaga River",44.40,-79.90],
 ["Maitland River",43.75,-81.60],["Thames River",42.90,-81.50],["Fanshawe Lake",43.03,-81.18],
 ["Belwood Lake",43.79,-80.33],["Conestogo Lake",43.68,-80.71],["Guelph Lake",43.60,-80.27],
 ["Island Lake (Orangeville)",43.93,-80.07],["Pittock Reservoir",43.14,-80.77]
];

const STOCK_URL='https://services1.arcgis.com/TJH5KDher0W13Kgo/arcgis/rest/services/'
  +'FishStockingDataForRecreationalPurposes/FeatureServer/0/query';
const ARA_URL='https://ws.lioservices.lrc.gov.on.ca/arcgis2/rest/services/'
  +'LIO_OPEN_DATA/LIO_Open07/MapServer/2/query';
function searchStocked(q){ return _cached('s|'+q.toLowerCase(), ()=>_searchStocked(q)); }
async function _searchStocked(q){
  const like="'%"+q.replace(/'/g,"''").toUpperCase()+"%'";
  const p=new URLSearchParams({
    where:"UPPER(Official_Waterbody_Name) LIKE "+like+" OR UPPER(Unoffcial_Waterbody_Name) LIKE "+like,
    outFields:'Official_Waterbody_Name,Unoffcial_Waterbody_Name,Species,Stocking_Year,Latitude,Longitude,Geographic_Township,MNRF_District',
    returnGeometry:'false', resultRecordCount:'400', f:'json'});
  const j=await (await fetch(STOCK_URL+'?'+p)).json();
  const g={};
  (j.features||[]).forEach(f=>{
    const a=f.attributes||{};
    let n=a.Official_Waterbody_Name||a.Unoffcial_Waterbody_Name;
    if(!n) return;
    n=n.replace(/\s*\(Unofficial Name\)/i,'');
    const key=n.toLowerCase()+'|'+(a.Latitude!=null?a.Latitude.toFixed(1):'')+','+(a.Longitude!=null?a.Longitude.toFixed(1):'');
    const e=g[key]||(g[key]={n:n,lat:a.Latitude,lng:a.Longitude,sp:{},town:a.Geographic_Township,dist:a.MNRF_District});
    if(!e.town&&a.Geographic_Township) e.town=a.Geographic_Township;
    if(a.Species) e.sp[a.Species]=Math.max(e.sp[a.Species]||0,a.Stocking_Year||0);
  });
  return Object.values(g);
}
// Fish ON-Line waterbody index (every lake it knows, stocked or not).
const _searchCache={};
function _cached(key, maker){
  if(_searchCache[key]) return Promise.resolve(_searchCache[key]);
  return maker().then(v=>{ _searchCache[key]=v; return v; });
}
async function araQuery(where, count){
  const p=new URLSearchParams({
    where:where,
    outFields:'OFFICIAL_WATERBODY_NAME,CORPORATE_WATERBODY_NAME,FISHERIES_MANAGEMENT_ZONE_ID,'
      +'WATERBODY_TYPE,FISH_SPECIES_SUMMARY,SURFACE_AREA,MAXIMUM_DEPTH,MEAN_DEPTH,WATERBODY_LID',
    returnGeometry:'false', resultRecordCount:String(count), f:'json'});
  const j=await (await fetch(ARA_URL+'?'+p)).json();
  const g={};
  (j.features||[]).forEach(f=>{
    const a=f.attributes||{};
    const n=a.OFFICIAL_WATERBODY_NAME||a.CORPORATE_WATERBODY_NAME;
    if(!n) return;
    const key=(a.WATERBODY_LID||n.toLowerCase()+'|'+(a.FISHERIES_MANAGEMENT_ZONE_ID||''));
    const e=g[key]||(g[key]={n:n,z:a.FISHERIES_MANAGEMENT_ZONE_ID,lid:a.WATERBODY_LID,
      type:a.WATERBODY_TYPE,area:null,maxd:null,meand:null,spset:new Set()});
    if(a.SURFACE_AREA!=null) e.area=Math.max(e.area||0,a.SURFACE_AREA);
    if(a.MAXIMUM_DEPTH!=null) e.maxd=Math.max(e.maxd||0,a.MAXIMUM_DEPTH);
    if(a.MEAN_DEPTH!=null) e.meand=Math.max(e.meand||0,a.MEAN_DEPTH);
    (a.FISH_SPECIES_SUMMARY||'').split(',').forEach(x=>{ x=x.trim(); if(x) e.spset.add(x); });
  });
  return Object.values(g).map(e=>({n:e.n,z:e.z,lid:e.lid,type:e.type,area:e.area,
    maxd:e.maxd,meand:e.meand,species:[...e.spset]}));
}
function araSearch(q){          // deep contains match
  const like="'%"+q.replace(/'/g,"''").toUpperCase()+"%'";
  return _cached('c|'+q.toLowerCase(), ()=>araQuery(
    "UPPER(OFFICIAL_WATERBODY_NAME) LIKE "+like+" OR UPPER(CORPORATE_WATERBODY_NAME) LIKE "+like, 80));
}
function araPrefix(q){          // fast indexed starts-with match
  const like="'"+q.replace(/'/g,"''").toUpperCase()+"%'";
  return _cached('p|'+q.toLowerCase(), ()=>araQuery(
    "UPPER(OFFICIAL_WATERBODY_NAME) LIKE "+like+" OR UPPER(CORPORATE_WATERBODY_NAME) LIKE "+like, 60));
}
async function araCentre(lid){
  const p=new URLSearchParams({where:"WATERBODY_LID='"+lid.replace(/'/g,"''")+"'",
    outFields:'WATERBODY_LID',returnGeometry:'true',maxAllowableOffset:'0.05',
    outSR:'4326',resultRecordCount:'1',f:'json'});
  const j=await (await fetch(ARA_URL+'?'+p)).json();
  const f=(j.features||[])[0];
  if(!f||!f.geometry||!f.geometry.rings||!f.geometry.rings[0]) return null;
  const ring=f.geometry.rings[0];
  let x=0,y=0; ring.forEach(pt=>{x+=pt[0];y+=pt[1];});
  return {lng:x/ring.length, lat:y/ring.length};
}
// Sport fish first when listing what swims in a lake.
const SPORT=['Walleye','Sauger','Largemouth Bass','Smallmouth Bass','Northern Pike','Muskellunge',
 'Yellow Perch','Black Crappie','Crappie','Lake Trout','Brook Trout','Rainbow Trout','Brown Trout',
 'Splake','Lake Whitefish','Channel Catfish','Atlantic Salmon','Chinook Salmon','Coho Salmon',
 'Pumpkinseed','Bluegill','Rock Bass','Lake Sturgeon','Lake Herring (Cisco)','Cisco'];
function sortSpecies(list){
  const ix=n=>{const i=SPORT.indexOf(n); return i<0?100:i;};
  return [...list].sort((a,b)=>ix(a)-ix(b)||a.localeCompare(b));
}
// Towns, cities, parks: federal geographic names service, Ontario only.
const PLACE_TYPES={CITY:'City',TOWN:'Town',VILG:'Village',HAM:'Hamlet',UNP:'Community',
 MUN1:'Municipality',MUN2:'Municipality',MUN:'Municipality',PARK:'Park',
 PROV:'Provincial park'};
function placeSearch(q){ return _cached('g|'+q.toLowerCase(), ()=>_placeSearch(q)); }
async function _placeSearch(q){
  const p=new URLSearchParams({q:q.replace(/\*+$/,'')+'*', province:'35', num:'60'});
  const j=await (await fetch('https://geogratis.gc.ca/services/geoname/en/geonames.json?'+p)).json();
  const places=[], waters=[];
  const WATERC=['LAKE','RIV','BAY','CHAN','FALL','FALLS','RAPS','CRK','STM'];
  (j.items||[]).forEach(it=>{
    if(it.latitude==null) return;
    const code=(it.concise||{}).code||'';
    const nm=(it.name||'').trim();
    if(/queen elizabeth ii wildlands|dalton digby wildlands/i.test(nm)) return; /* that one belongs to the parks side, old name included */
    const isPark=/\b(provincial|national) park\b/i.test(nm)||/\bpark$/i.test(nm)||code==='PARK';
    if(isPark) places.push({n:nm, lat:it.latitude, lng:it.longitude, place:true,
      ptype:/national/i.test(nm)?'National park':'Provincial park', loc:it.location||''});
    else if(PLACE_TYPES[code]) places.push({n:nm, lat:it.latitude, lng:it.longitude, place:true,
      ptype:PLACE_TYPES[code], loc:it.location||''});
    else if(WATERC.includes(code)) waters.push({nl:nm.toLowerCase(), loc:it.location||'',
      z:zoneAt(it.longitude,it.latitude)});
  });
  return {places, waters};
}


// One popularity order used in every zone: the fish people actually target
// first, the notes last.
const ORDER=["Largemouth and Smallmouth Bass combined","Largemouth Bass","Smallmouth Bass",
 "Walleye and Sauger combined","Northern Pike","Yellow Perch","Sunfish","Crappie","Muskellunge",
 "Lake Trout","Lake Trout and Splake","Brook Trout","Rainbow Trout","Brown Trout and Rainbow Trout",
 "Brown Trout","Splake","Lake Whitefish","Channel Catfish","Atlantic Salmon","Pacific Salmon",
 "Lake Herring (Cisco)","Lake Sturgeon","Aggregate Limits for Trout and Salmon"];
const ORDER_IX={}; ORDER.forEach((n,i)=>{ ORDER_IX[n]=i; });
function rankName(a,b){
  const ia=ORDER_IX[a]!=null?ORDER_IX[a]:900, ib=ORDER_IX[b]!=null?ORDER_IX[b]:900;
  return ia-ib || a.localeCompare(b);
}
// Closed fish sit at the top, then everything else, each in the order above.
function bySpecies(a,b){
  const ca=seasonStatus(a.season).status==='closed'?0:1;
  const cb=seasonStatus(b.season).status==='closed'?0:1;
  return ca-cb || rankName(a.species,b.species);
}
function statusColor(s){ return s==='open'?'#00753A':s==='closed'?'#B0574A':s==='unknown'?'#C7D7C9':'#E4EDE4'; }
// Same hue, more vivid: boosts saturation (and trims lightness a touch) so a
// picked zone pops instead of going muddy.
function vivid(hex,satBoost=0.30,lightDrop=0.10){
  const n=parseInt(hex.slice(1),16);
  let r=((n>>16)&255)/255, g=((n>>8)&255)/255, b=(n&255)/255;
  const max=Math.max(r,g,b), min=Math.min(r,g,b);
  let h=0, l=(max+min)/2, d=max-min;
  let s=d===0?0:d/(1-Math.abs(2*l-1));
  if(d){ if(max===r) h=((g-b)/d)%6; else if(max===g) h=(b-r)/d+2; else h=(r-g)/d+4; h*=60; if(h<0)h+=360; }
  s=Math.min(1,s+satBoost); l=Math.max(0,l-lightDrop);
  const c=(1-Math.abs(2*l-1))*s, x=c*(1-Math.abs((h/60)%2-1)), m=l-c/2;
  let R,G,B;
  if(h<60){R=c;G=x;B=0} else if(h<120){R=x;G=c;B=0} else if(h<180){R=0;G=c;B=x}
  else if(h<240){R=0;G=x;B=c} else if(h<300){R=x;G=0;B=c} else {R=c;G=0;B=x}
  const to=v=>Math.round((v+m)*255);
  return '#'+(1<<24|to(R)<<16|to(G)<<8|to(B)).toString(16).slice(1);
}
function esc(s){ return (s||"").replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }
function titleCase(x){ return (x||'').toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase()); }
function label(st){ return st==='open'?'Open':st==='closed'?'Closed':'Check'; }

let selectedZone=null;
let exploreSpecies=null;
let speciesMap={};
const zoneMeta={};
const zoneFeatures=[];

/* ---------------- map ---------------- */
const map=L.map('map',{minZoom:4,maxZoom:16,zoomControl:false,doubleClickZoom:false}).setView([50.2,-85.5],5);
const TILESET=THEME_DARK?'dark_nolabels':'voyager_nolabels';
const LABELSET=THEME_DARK?'dark_only_labels':'voyager_only_labels';
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/'+TILESET+'/{z}/{x}/{y}{r}.png',
  {attribution:'&copy; OpenStreetMap, &copy; CARTO',subdomains:'abcd',
   updateWhenIdle:true,updateWhenZooming:false,keepBuffer:4}).addTo(map);

// Detailed labels (towns, lakes, rivers) appear only when zoomed in close.
// Below that, hand placed labels keep the map calm.
map.createPane('onlabels');
map.getPane('onlabels').style.zIndex=450;
map.getPane('onlabels').style.pointerEvents='none';
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/'+LABELSET+'/{z}/{x}/{y}{r}.png',
  {pane:'onlabels',subdomains:'abcd',minZoom:8,
   updateWhenIdle:true,updateWhenZooming:false,keepBuffer:2}).addTo(map);

map.createPane('marks');
map.getPane('marks').style.zIndex=460;
map.getPane('marks').style.pointerEvents='none';

// Province and state tags, always on.
[['MANITOBA',53.6,-98.8],['QUÉBEC',50.8,-72.0],['MINNESOTA',47.6,-94.4],
 ['WISCONSIN',45.2,-90.2],['MICHIGAN',44.4,-85.2],['NEW YORK',42.9,-75.6],
 ['PENNSYLVANIA',41.3,-77.9],['OHIO',40.6,-82.9]
].forEach(([n,lat,lng])=>{
  L.marker([lat,lng],{pane:'marks',interactive:false,keyboard:false,
    icon:L.divIcon({className:'plabel',html:n,iconSize:[0,0]})}).addTo(map);
});

// Major Ontario cities. Tier 1 shows from far out, tier 2 a bit closer,
// and both hand off to the detailed tile labels at close zoom.
const CITIES=[
 [1,'Toronto',43.65,-79.38],[1,'Ottawa',45.42,-75.70],[1,'Sudbury',46.49,-81.01],
 [1,'Thunder Bay',48.38,-89.25],[1,'Timmins',48.48,-81.33],[1,'Kenora',49.77,-94.49],
 [1,'Sault Ste. Marie',46.52,-84.33],[1,'Moosonee',51.27,-80.65],
 [2,'Hamilton',43.26,-79.87],[2,'London',42.98,-81.25],[2,'Windsor',42.32,-83.04],
 [2,'Kitchener',43.45,-80.49],[2,'Kingston',44.23,-76.48],[2,'Peterborough',44.31,-78.32],
 [2,'Barrie',44.39,-79.69],[2,'Owen Sound',44.57,-80.94],[2,'North Bay',46.31,-79.46],
 [2,'Parry Sound',45.35,-80.04],[2,'Huntsville',45.33,-79.22],[2,'Pembroke',45.83,-77.11],
 [2,'Belleville',44.16,-77.38],[2,'Cornwall',45.02,-74.73],[2,'Sarnia',42.97,-82.40],
 [2,'Wawa',47.99,-84.77],[2,'Kapuskasing',49.42,-82.43],[2,'Cochrane',49.07,-81.02],
 [2,'Hearst',49.69,-83.67],[2,'Marathon',48.72,-86.38],[2,'Nipigon',49.01,-88.27],
 [2,'Geraldton',49.72,-86.95],[2,'Dryden',49.78,-92.84],[2,'Fort Frances',48.61,-93.40],
 [2,'Atikokan',48.76,-91.62],[2,'Sioux Lookout',50.10,-91.92],[2,'Red Lake',51.03,-93.83],
 [2,'Pickle Lake',51.47,-90.20],[2,'Attawapiskat',52.93,-82.42],
 [3,'Algonquin Park',45.80,-78.40],[3,'Muskoka',45.05,-79.45],[3,'Kawartha Lakes',44.50,-78.55]
];
CITIES.forEach(([tier,n,lat,lng])=>{
  const cls = tier===3 ? 'alabel' : ('clabel t'+tier);
  const html = tier===3 ? n : '<span class="cdot"></span>'+n;
  L.marker([lat,lng],{pane:'marks',interactive:false,keyboard:false,
    icon:L.divIcon({className:cls,html:html,iconSize:[0,0]})}).addTo(map);
});
function updateMarks(){
  const z=map.getZoom(), pane=map.getPane('marks');
  pane.classList.toggle('z-far', z<6);      // tier 1 + areas only
  pane.classList.toggle('z-hide', z>=11);   // keep city names through mid zoom
}
map.on('zoomend', updateMarks);
updateMarks();



function styleFn(feature){
  const z=feature.properties[ZONE_FIELD], sel=(z===selectedZone);
  let fill;
  if(exploreSpecies){
    const rec=speciesMap[exploreSpecies] && speciesMap[exploreSpecies][z];
    fill = rec ? statusColor(seasonStatus(rec.season).status) : '#E4EDE4';
  } else {
    const base=TINT[z % TINT.length];
    fill = sel ? vivid(base) : base;           // picked zone: same hue, more vibrant
  }
  const dim = (selectedZone!=null && !sel);
  return {stroke:false, fillColor:fill,
          fillOpacity: exploreSpecies?0.6:(sel?0.72:(dim?0.38:0.55))};
}

// Boundaries load ONCE, generalized by the server (about 500 m tolerance),
// then draw on a canvas renderer. No refetching while you pan or zoom, far
// fewer points to paint, so the map stays smooth.
const BOUNDS_URL=SERVICE+'/query?where=1%3D1'
  +'&outFields='+ZONE_FIELD+',LOCATION_DESCR'
  +'&returnGeometry=true&maxAllowableOffset=0.005&geometryPrecision=5&outSR=4326&f=geojson';
map.createPane('zonefill'); map.getPane('zonefill').style.zIndex=402;
map.createPane('zoneline'); map.getPane('zoneline').style.zIndex=403;
const fillRenderer=L.canvas({padding:0.4,pane:'zonefill'});
const lineRenderer=L.canvas({padding:0.4,pane:'zoneline'});
let fmz=null, fmzLine=null;
function lineStyle(feature){
  const z=feature.properties[ZONE_FIELD], sel=(z===selectedZone);
  return {color:'#FFFFFF', weight: sel?3:1.2, fill:false, opacity: sel?1:0.9};
}
function restyleZones(){ if(fmz) fmz.setStyle(styleFn); if(fmzLine) fmzLine.setStyle(lineStyle); }
fetch(BOUNDS_URL).then(r=>r.json()).then(gj=>{
  zoneFeatures.length=0;
  gj.features.forEach(f=>{
    const z=f.properties[ZONE_FIELD];
    zoneMeta[z]={descr:f.properties.LOCATION_DESCR||''};
    if(f.geometry) zoneFeatures.push({z, geometry:f.geometry});
  });
  fmz=L.geoJSON(gj,{renderer:fillRenderer, smoothFactor:1.4, style:styleFn}).addTo(map);
  fmzLine=L.geoJSON(gj,{renderer:lineRenderer, smoothFactor:1.4, style:lineStyle}).addTo(map);
  if(!overlayOn){ map.removeLayer(fmz); map.removeLayer(fmzLine); }
  const l=document.getElementById('loading'); if(l) l.remove();
  if(selectedZone){ zoomToZone(selectedZone); }
}).catch(()=>{
  const l=document.getElementById('loading');
  if(l) l.textContent='Map offline, use the numbers';
});

/* ---------------- point in polygon ---------------- */
function pointInRing(pt, ring){
  let inside=false, x=pt[0], y=pt[1];
  for(let i=0,j=ring.length-1;i<ring.length;j=i++){
    const xi=ring[i][0],yi=ring[i][1],xj=ring[j][0],yj=ring[j][1];
    if(((yi>y)!==(yj>y)) && (x < (xj-xi)*(y-yi)/(yj-yi)+xi)) inside=!inside;
  }
  return inside;
}
function pointInPolygon(pt, poly){
  if(!pointInRing(pt, poly[0])) return false;
  for(let k=1;k<poly.length;k++) if(pointInRing(pt, poly[k])) return false;
  return true;
}
function zoneBounds(z){
  let minLa=90,maxLa=-90,minLo=180,maxLo=-180,found=false;
  zoneFeatures.forEach(f=>{ if(f.z!==z) return;
    const polys=f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.coordinates;
    polys.forEach(p=>p[0].forEach(pt=>{ found=true;
      if(pt[1]<minLa)minLa=pt[1]; if(pt[1]>maxLa)maxLa=pt[1];
      if(pt[0]<minLo)minLo=pt[0]; if(pt[0]>maxLo)maxLo=pt[0]; }));
  });
  return found?[[minLa,minLo],[maxLa,maxLo]]:null;
}
function zoomToZone(z){
  const b=zoneBounds(z);
  if(b) map.fitBounds(b,{padding:[28,28],maxZoom:8});
}
function zoneAt(lng,lat){
  const pt=[lng,lat];
  for(const f of zoneFeatures){
    const g=f.geometry;
    if(g.type==='Polygon'){ if(pointInPolygon(pt,g.coordinates)) return f.z; }
    else if(g.type==='MultiPolygon'){ for(const p of g.coordinates) if(pointInPolygon(pt,p)) return f.z; }
  }
  return null;
}

/* ---------------- zone overlay toggle ---------------- */
let overlayOn=!EMBED;   /* inside Site Journal's map the parks lead, zones wait for the toggle */
const toggleBtn=document.getElementById('togglezones');
function setOverlay(on){
  overlayOn=on;
  toggleBtn.classList.toggle('on',on);
  [fmz,fmzLine].forEach(l=>{ if(!l) return;
    if(on){ if(!map.hasLayer(l)) l.addTo(map); } else if(map.hasLayer(l)) map.removeLayer(l); });
}
toggleBtn.onclick=()=>setOverlay(!overlayOn);
setOverlay(overlayOn);

/* ---------------- park pins (Site Journal's parks) ---------------- */
const PARK_PINS=[{"id":"aaron","name":"Aaron","lat":49.7596,"lng":-92.6535},{"id":"algonquinachray","name":"Achray","lat":45.8664,"lng":-77.7534},{"id":"arrowhead","name":"Arrowhead","lat":45.3917,"lng":-79.1986},{"id":"awenda","name":"Awenda","lat":44.8413,"lng":-79.9925},{"id":"balsamlake","name":"Balsam Lake","lat":44.6278,"lng":-78.865},{"id":"basslake","name":"Bass Lake","lat":44.6044,"lng":-79.4808},{"id":"batchawanabay","name":"Batchawana Bay","lat":46.9333,"lng":-84.6167},{"id":"bluelake","name":"Blue Lake","lat":49.8933,"lng":-93.5413},{"id":"bonecho","name":"Bon Echo","lat":44.9115,"lng":-77.2661},{"id":"bonnechere","name":"Bonnechere","lat":45.6621,"lng":-77.5718},{"id":"boynevalley","name":"Boyne Valley","lat":44.1167,"lng":-80.1333},{"id":"algonquinbrent","name":"Brent","lat":46.1746,"lng":-78.4914},{"id":"brontecreek","name":"Bronte Creek","lat":43.4156,"lng":-79.7678},{"id":"caliperlake","name":"Caliper Lake","lat":49.0635,"lng":-93.9127},{"id":"algonquincanisbay","name":"Canisbay","lat":45.592,"lng":-78.6425},{"id":"charlestonlake","name":"Charleston Lake","lat":44.5197,"lng":-76.0383},{"id":"chutes","name":"Chutes","lat":46.221,"lng":-82.0723},{"id":"craigleith","name":"Craigleith","lat":44.5333,"lng":-80.35},{"id":"darlington","name":"Darlington","lat":43.8725,"lng":-78.7839},{"id":"devilsglen","name":"Devil's Glen","lat":44.3833,"lng":-80.2},{"id":"driftwood","name":"Driftwood","lat":46.1877,"lng":-77.8534},{"id":"earlrowe","name":"Earl Rowe","lat":44.1579,"lng":-79.905},{"id":"emily","name":"Emily","lat":44.3374,"lng":-78.535},{"id":"eskerlakes","name":"Esker Lakes","lat":48.3203,"lng":-79.8775},{"id":"fairbank","name":"Fairbank","lat":46.4719,"lng":-81.4411},{"id":"ferris","name":"Ferris","lat":44.2919,"lng":-77.7939},{"id":"finlaysonpoint","name":"Finlayson Point","lat":47.0552,"lng":-79.8046},{"id":"fitzroy","name":"Fitzroy","lat":45.4826,"lng":-76.2179},{"id":"forksofthecredit","name":"Forks of the Credit","lat":43.8236,"lng":-80.0114},{"id":"frenchriver","name":"French River","lat":46.032,"lng":-80.3252},{"id":"frontenac","name":"Frontenac","lat":44.5422,"lng":-76.5106},{"id":"fushimilake","name":"Fushimi Lake","lat":49.82,"lng":-83.9172},{"id":"grundy","name":"Grundy Lake","lat":45.9488,"lng":-80.5375},{"id":"halfwaylake","name":"Halfway Lake","lat":46.9108,"lng":-81.6531},{"id":"inverhuron","name":"Inverhuron","lat":44.3002,"lng":-81.5903},{"id":"ivanhoelake","name":"Ivanhoe Lake","lat":48.1491,"lng":-82.5118},{"id":"johnepearce","name":"John E. Pearce","lat":42.5814,"lng":-81.4644},{"id":"kakabekafalls","name":"Kakabeka Falls","lat":48.3987,"lng":-89.6266},{"id":"kawarthahighlands","name":"Kawartha Highlands","lat":44.7292,"lng":-78.2069},{"id":"algonquinkearney","name":"Kearney Lake","lat":45.5397,"lng":-78.3948},{"id":"kettlelakes","name":"Kettle Lakes","lat":48.5692,"lng":-80.8694},{"id":"killarney","name":"Killarney","lat":46.1006,"lng":-81.3811},{"id":"killbear","name":"Killbear","lat":45.3548,"lng":-80.1983},{"id":"algonquinkiosk","name":"Kiosk","lat":46.0977,"lng":-78.8815},{"id":"komoka","name":"Komoka","lat":42.9499,"lng":-81.3974},{"id":"lakestpeter","name":"Lake St. Peter","lat":45.3343,"lng":-78.0233},{"id":"lakesuperior","name":"Lake Superior","lat":47.5968,"lng":-84.7416},{"id":"algonquintworivers","name":"Lake of Two Rivers","lat":45.5787,"lng":-78.4933},{"id":"longpoint","name":"Long Point","lat":42.5797,"lng":-80.3838},{"id":"macgregorpoint","name":"MacGregor Point","lat":44.4096,"lng":-81.4691},{"id":"macleod","name":"MacLeod","lat":49.6893,"lng":-86.8985},{"id":"makobegrays","name":"Makobe-Grays River","lat":47.3872,"lng":-80.2882},{"id":"mara","name":"Mara","lat":44.5875,"lng":-79.3592},{"id":"markburnham","name":"Mark S. Burnham","lat":44.2999,"lng":-78.2692},{"id":"martenriver","name":"Marten River","lat":46.7232,"lng":-79.8148},{"id":"mcraepoint","name":"McRae Point","lat":44.5713,"lng":-79.328},{"id":"algonquinmew","name":"Mew Lake","lat":45.5747,"lng":-78.5237},{"id":"mikisew","name":"Mikisew","lat":45.8219,"lng":-79.5114},{"id":"miserybay","name":"Misery Bay","lat":45.791,"lng":-82.745},{"id":"missinaibi","name":"Missinaibi","lat":48.3145,"lng":-83.7291},{"id":"mississagi","name":"Mississagi","lat":46.5883,"lng":-82.6883},{"id":"monocliffs","name":"Mono Cliffs","lat":44.0453,"lng":-80.0764},{"id":"murphyspoint","name":"Murphys Point","lat":44.7828,"lng":-76.2197},{"id":"nagagamisis","name":"Nagagamisis","lat":49.4634,"lng":-84.7465},{"id":"neys","name":"Neys","lat":48.755,"lng":-86.5761},{"id":"northbeach","name":"North Beach","lat":43.9469,"lng":-77.5364},{"id":"oastlerlake","name":"Oastler Lake","lat":45.3124,"lng":-79.9639},{"id":"obabikariver","name":"Obabika River","lat":47.048,"lng":-80.1783},{"id":"ojibway","name":"Ojibway","lat":49.9882,"lng":-92.1457},{"id":"ouimetcanyon","name":"Ouimet Canyon","lat":48.7881,"lng":-88.67},{"id":"oxtongueriver","name":"Oxtongue River, Ragged Falls","lat":45.3799,"lng":-78.9078},{"id":"pakwash","name":"Pakwash","lat":50.785,"lng":-93.4414},{"id":"pancakebay","name":"Pancake Bay","lat":46.9697,"lng":-84.6918},{"id":"petroglyphs","name":"Petroglyphs","lat":44.6206,"lng":-78.0461},{"id":"pigeonriver","name":"Pigeon River","lat":48.0333,"lng":-89.6167},{"id":"pinery","name":"Pinery","lat":43.2815,"lng":-81.7978},{"id":"algonquinpog","name":"Pog Lake","lat":45.546,"lng":-78.3934},{"id":"pointfarms","name":"Point Farms","lat":43.8049,"lng":-81.7173},{"id":"portbruce","name":"Port Bruce","lat":42.66,"lng":-81.008},{"id":"portburwell","name":"Port Burwell","lat":42.648,"lng":-80.8162},{"id":"potholes","name":"Potholes","lat":47.9167,"lng":-84.5833},{"id":"presquile","name":"Presqu'ile","lat":43.9939,"lng":-77.7131},{"id":"quetico","name":"Quetico","lat":48.3774,"lng":-91.5167},{"id":"algonquinraccoon","name":"Raccoon Lake","lat":45.5307,"lng":-78.3841},{"id":"rainbowfalls","name":"Rainbow Falls","lat":48.8475,"lng":-87.3922},{"id":"renebrunelle","name":"Rene Brunelle","lat":49.4481,"lng":-82.1475},{"id":"restoule","name":"Restoule","lat":46.0672,"lng":-79.7732},{"id":"rideauriver","name":"Rideau River","lat":45.0592,"lng":-75.6711},{"id":"algonquinrock","name":"Rock Lake","lat":45.5288,"lng":-78.3822},{"id":"rockpoint","name":"Rock Point","lat":42.8494,"lng":-79.5542},{"id":"rondeau","name":"Rondeau","lat":42.287,"lng":-81.852},{"id":"rushingriver","name":"Rushing River","lat":49.6869,"lng":-94.2289},{"id":"samueldechamplain","name":"Samuel de Champlain","lat":46.2922,"lng":-78.8675},{"id":"sandbanks","name":"Sandbanks","lat":43.9186,"lng":-77.2936},{"id":"sandbarlake","name":"Sandbar Lake","lat":49.4668,"lng":-91.5587},{"id":"saublefalls","name":"Sauble Falls","lat":44.6756,"lng":-81.2568},{"id":"selkirk","name":"Selkirk","lat":42.8139,"lng":-79.9589},{"id":"sharbotlake","name":"Sharbot Lake","lat":44.7714,"lng":-76.7253},{"id":"shorthills","name":"Short Hills","lat":43.1,"lng":-79.2833},{"id":"sibbaldpoint","name":"Sibbald Point","lat":44.3278,"lng":-79.3211},{"id":"silentlake","name":"Silent Lake","lat":44.9096,"lng":-78.051},{"id":"silverfalls","name":"Silver Falls","lat":48.6839,"lng":-89.606},{"id":"silverlake","name":"Silver Lake","lat":44.8309,"lng":-76.5773},{"id":"siouxnarrows","name":"Sioux Narrows","lat":49.424,"lng":-94.0499},{"id":"sixmilelake","name":"Six Mile Lake","lat":44.8914,"lng":-79.7533},{"id":"sleepinggiant","name":"Sleeping Giant","lat":48.4333,"lng":-88.7653},{"id":"solace","name":"Solace","lat":47.15,"lng":-80.4667},{"id":"spanishriver","name":"Spanish River","lat":46.7,"lng":-81.95},{"id":"springwater","name":"Springwater","lat":44.4396,"lng":-79.7615},{"id":"sturgeonbay","name":"Sturgeon Bay","lat":45.6236,"lng":-80.4154},{"id":"sturgeonriver","name":"Sturgeon River","lat":46.9833,"lng":-80.7333},{"id":"algonquintea","name":"Tea Lake","lat":45.5586,"lng":-78.7803},{"id":"themassasauga","name":"The Massasauga","lat":45.1969,"lng":-80.0498},{"id":"tidewater","name":"Tidewater","lat":51.2333,"lng":-80.6167},{"id":"turkeypoint","name":"Turkey Point","lat":42.7053,"lng":-80.3325},{"id":"voyageur","name":"Voyageur","lat":45.5508,"lng":-74.434},{"id":"wabakimi","name":"Wabakimi","lat":50.6217,"lng":-89.619},{"id":"wakamilake","name":"Wakami Lake","lat":47.489,"lng":-82.8326},{"id":"wasagabeach","name":"Wasaga Beach","lat":44.5167,"lng":-80.0167},{"id":"wheatley","name":"Wheatley","lat":42.09,"lng":-82.4472},{"id":"whitelake","name":"White Lake","lat":48.699,"lng":-85.673},{"id":"windylake","name":"Windy Lake","lat":46.6191,"lng":-81.4479},{"id":"woodlandcaribou","name":"Woodland Caribou","lat":50.9986,"lng":-94.7503}];
/* park pages live in the sibling on-camp app; from the iOS shell the link
   opens in Safari (the old bundled-inside-on-camp layout no longer exists) */
const SJ_URL='https://katsuma0.github.io/on-camp/';
const SJ_PARK_IDS={}; PARK_PINS.forEach(p=>{ SJ_PARK_IDS[parkBase(p.name)]=p.id; });
map.createPane('parks');
map.getPane('parks').style.zIndex=455;
const parkIcon=L.divIcon({className:'parkpin',iconSize:[20,26],iconAnchor:[10,24],
  html:'<svg width="20" height="26" viewBox="0 0 26 34">'
    +'<path d="M13 1C6.4 1 1 6.4 1 13c0 8.9 12 20 12 20s12-11.1 12-20C25 6.4 19.6 1 13 1z" style="fill:var(--forest)" stroke="#FFFFFF" stroke-width="1.8"/>'
    +'<path d="M13 5.5 18 13h-2.6l3.4 5.5H7.2L10.6 13H8z" fill="#FFFFFF"/>'
    +'<rect x="12.1" y="18.5" width="1.8" height="3.2" fill="#FFFFFF"/></svg>'});
const parksLayer=L.layerGroup();
PARK_PINS.forEach(p=>{
  const m=L.marker([p.lat,p.lng],{pane:'parks',icon:parkIcon,title:p.name});
  m.bindTooltip(p.name,{permanent:true,direction:'bottom',offset:[0,0],className:'parklabel',pane:'parks'});
  m.on('click',()=>openParkPin(p));
  parksLayer.addLayer(m);
});
/* park names appear once you are reasonably close */
function updateParkLabels(){ document.getElementById('map').classList.toggle('zoomclose',map.getZoom()>=8); }
map.on('zoomend',updateParkLabels); updateParkLabels();
function openParkPin(p){
  const el=document.createElement('div');
  const nm=document.createElement('div'); nm.textContent=p.name;
  nm.style.cssText='font-weight:800;font-size:13px;margin-bottom:4px;color:var(--ink)';
  const a=document.createElement('a'); a.textContent='Open in ON Camp';
  a.href=SJ_URL+'#park='+p.id;
  a.style.cssText='color:var(--forest);font-weight:700;font-size:13px;text-decoration:underline;text-underline-offset:2px';
  if(EMBED&&window.parent!==window){
    a.href='#'; a.onclick=e=>{ e.preventDefault(); parent.postMessage({type:'sj-open-park',id:p.id},'*'); };
  }
  el.appendChild(nm); el.appendChild(a);
  L.popup({closeButton:false,offset:[0,-24]}).setLatLng([p.lat,p.lng]).setContent(el).openOn(map);
}
const parksBtn=document.getElementById('toggleparks');
let parksOn = EMBED ? true : localStorage.getItem('onfr-parks')==='on';
function setParks(on){
  parksOn=on;
  parksBtn.classList.toggle('on',on);
  if(on){ if(!map.hasLayer(parksLayer)) parksLayer.addTo(map); }
  else if(map.hasLayer(parksLayer)) map.removeLayer(parksLayer);
  if(!EMBED){ try{ localStorage.setItem('onfr-parks',on?'on':'off'); }catch(e){} }
}
parksBtn.onclick=()=>setParks(!parksOn);
setParks(parksOn);

/* labels toggle: city names and the fine tile labels */
const labelsBtn=document.getElementById('togglelabels');
let labelsOn = localStorage.getItem('onfr-labels')!=='off';
function setLabels(on){
  labelsOn=on;
  labelsBtn.classList.toggle('on',on);
  ['onlabels','marks'].forEach(pn=>{ const p=map.getPane(pn); if(p) p.style.display=on?'':'none'; });
  try{ localStorage.setItem('onfr-labels',on?'on':'off'); }catch(e){}
}
labelsBtn.onclick=()=>setLabels(!labelsOn);
setLabels(labelsOn);

/* embed mode: just the map, for Site Journal's pull-down */
if(EMBED){
  document.body.classList.add('embed');
  setTimeout(()=>map.invalidateSize(),60);
}

/* ---------------- phone sheet: the page floats over the map ----------------
   At rest the page covers the map completely. Pulling down from the very top
   reveals the grabber and rounded corners, then slides the page to a strip at
   the bottom showing just the title. Tap or pull the strip up to come back. */
const panelEl=document.getElementById('panel');
const pullwrap=document.getElementById('pullwrap');
let sheetMin=false, dragY=null, dragged=false;
function setSheet(min){ sheetMin=min;
  panelEl.classList.toggle('min',min);
  panelEl.classList.remove('drag'); panelEl.style.transform='';
  if(min) panelEl.scrollTop=0; buzz(8); }
panelEl.addEventListener('touchstart',e=>{
  dragged=false;
  if(sheetMin){ dragY=e.touches[0].clientY; return; }
  dragY=(panelEl.scrollTop<=0)?e.touches[0].clientY:null;
},{passive:true});
panelEl.addEventListener('touchmove',e=>{
  if(dragY==null) return;
  const dy=e.touches[0].clientY-dragY;
  if(sheetMin){ if(dy<-60){ dragY=null; setSheet(false); } return; }
  if(dy>8&&panelEl.scrollTop<=0){
    dragged=true; e.preventDefault();
    panelEl.classList.add('drag');
    panelEl.style.transform='translateY('+Math.min(dy*0.6,150)+'px)';
  } else if(dragged){ e.preventDefault();
    panelEl.style.transform='translateY('+Math.max(0,Math.min(dy*0.6,150))+'px)'; }
},{passive:false});
panelEl.addEventListener('touchend',e=>{
  if(dragY==null){ dragged=false; return; }
  const dy=e.changedTouches[0].clientY-dragY;
  dragY=null;
  if(sheetMin) return;
  panelEl.classList.remove('drag'); panelEl.style.transform='';
  if(dragged&&dy>70) setSheet(true);
  dragged=false;
});
panelEl.addEventListener('click',e=>{ if(sheetMin){ e.preventDefault(); e.stopPropagation(); setSheet(false); } },true);
pullwrap.addEventListener('click',()=>{ if(sheetMin) setSheet(false); });
/* desktop trackpads: scrolling up past the top opens the map too */
panelEl.addEventListener('wheel',e=>{ if(!sheetMin&&panelEl.scrollTop<=0&&e.deltaY<-25&&window.innerWidth<=860) setSheet(true); },{passive:true});

map.on('click', e=>{
  if(EMBED) return;                            // embedded map: pins do the talking
  if(!overlayOn) return;                       // zones hidden, leave the map alone
  const z=zoneAt(e.latlng.lng, e.latlng.lat);
  if(z){ selectZone(z); if(typeof setSheet==='function') setSheet(false); }
});

/* ---------------- season status ---------------- */
const MONTHS={january:0,february:1,march:2,april:3,may:4,june:5,july:6,august:7,september:8,october:9,november:10,december:11};
const WD={sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6};
const ORD={first:1,'1st':1,second:2,'2nd':2,third:3,'3rd':3,fourth:4,'4th':4,fifth:5,'5th':5};
function nthWeekday(year,monthIdx,wd,n){
  const d=new Date(year,monthIdx,1); let count=0;
  while(d.getMonth()===monthIdx){ if(d.getDay()===wd){ count++; if(count===n) return new Date(d); } d.setDate(d.getDate()+1); }
  return null;
}
function parseToken(tok,year){
  tok=tok.trim().toLowerCase();
  if(/before|after/.test(tok)) return null;
  if(/labour day/.test(tok)) return nthWeekday(year,8,1,1);
  let m=tok.match(/^(first|second|third|fourth|fifth|1st|2nd|3rd|4th|5th)\s+(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\s+in\s+([a-z]+)/);
  if(m && ORD[m[1]]!=null && WD[m[2]]!=null && MONTHS[m[3]]!=null) return nthWeekday(year,MONTHS[m[3]],WD[m[2]],ORD[m[1]]);
  m=tok.match(/^([a-z]+)\s+(\d{1,2})/);
  if(m && MONTHS[m[1]]!=null) return new Date(year,MONTHS[m[1]],parseInt(m[2],10));
  return null;
}
function rangesOf(season,year){
  const s=season.toLowerCase();
  if(/open all year/.test(s)) return {allyear:'open'};
  if(/closed all year/.test(s)) return {allyear:'closed'};
  const ranges=[]; let unknown=false;
  for(const part of season.split(/\s+and\s+/i)){
    const i=part.toLowerCase().indexOf(' to ');
    if(i<0){ unknown=true; continue; }
    const a=parseToken(part.slice(0,i),year), b=parseToken(part.slice(i+4),year);
    if(!a||!b){ unknown=true; continue; }
    ranges.push([new Date(a.getFullYear(),a.getMonth(),a.getDate()),
                 new Date(b.getFullYear(),b.getMonth(),b.getDate(),23,59,59)]);
  }
  return {ranges,unknown};
}
function seasonStatus(season){
  if(!season) return {status:'unknown'};
  const now=new Date(), year=now.getFullYear(), r=rangesOf(season,year);
  if(r.allyear) return {status:r.allyear};
  let open=false, activeEnd=null, nextStart=null;
  for(const [a,b] of r.ranges){
    if(now>=a && now<=b){ open=true; if(!activeEnd||b<activeEnd) activeEnd=b; }
    if(a>now && (!nextStart||a<nextStart)) nextStart=a;
  }
  const DAY=86400000;
  if(open){ const days=activeEnd?Math.ceil((activeEnd-now)/DAY):null;
    return {status:'open', soon:(days!=null&&days<=14)?{type:'closing',days}:null}; }
  if(r.ranges.length){ const days=nextStart?Math.ceil((nextStart-now)/DAY):null;
    return {status:'closed', soon:(days!=null&&days<=14)?{type:'opening',days}:null}; }
  return {status:'unknown'};
}
function openStatus(season){ return seasonStatus(season).status; }

/* ---------------- zone chips ---------------- */
const zonesEl=document.getElementById('zones');
for(let z=1;z<=20;z++){
  const c=document.createElement('button');
  c.className='ztile'; c.textContent=z; c.dataset.zone=z;
  if(!REG[z]) c.disabled=true;
  c.onclick=()=>selectZone(z);
  zonesEl.appendChild(c);
}

const detailEl=document.getElementById('detail');
const searchEl=document.getElementById('search');
function showEmpty(){ detailEl.innerHTML=''; detailEl.hidden=true; }
showEmpty();

/* ---------------- selection and panel ---------------- */
function paintTiles(){
  document.querySelectorAll('.ztile[data-zone]').forEach(c=>
    c.classList.toggle('on',Number(c.dataset.zone)===selectedZone));
}
/* ---------------- detail navigation stack ---------------- */
function titleOf(v){
  if(v.type==='zone') return 'Zone '+v.z;
  if(v.type==='fish') return v.name;
  if(v.type==='catchlog') return 'Catch log';
  if(v.type==='account') return 'Account';
  if(v.type==='shared') return sharedTitle(v.item);
  return v.w.n;
}
function subOf(v){
  if(v.type==='zone') return (zoneMeta[v.z]&&zoneMeta[v.z].name)?esc(zoneMeta[v.z].name):'Seasons and limits';
  if(v.type==='catchlog'){ const n=loadCatches().length; return n?(n+(n===1?' catch logged':' catches logged')):'On your phone, ready to share'; }
  if(v.type==='account') return 'On this phone only';
  if(v.type==='shared') return 'Shared with you';
  if(v.type==='fish'){ const m=fishRegInfo(v.name).merged; let n=0,open=0; for(let z=1;z<=20;z++) if(m[z]){ n++; if(seasonStatus(m[z].rec.season).status==='open') open++; }
    return open+' of '+n+' zones open now'; }
  if(v.type==='place'){ const kind=/park/i.test(v.w.ptype||'')?v.w.ptype:'Town';
    return [v.w.z?('Zone '+v.w.z):'Zone unknown', v.w.loc||'', kind].filter(Boolean).map(esc).join(' · '); }
  if(v.type==='water') return [v.w.z?('Zone '+v.w.z):'', v.w.loc||''].filter(Boolean).map(esc).join(' · ');
  return '';
}
function bodyOf(v){
  if(v.type==='zone') return zoneBody(v.z);
  if(v.type==='fish') return fishBody(v.name);
  if(v.type==='water') return waterBody(v.w);
  if(v.type==='place') return placeBody(v.w);
  if(v.type==='catchlog') return catchlogBody();
  if(v.type==='account') return accountBody();
  if(v.type==='shared') return sharedBody(v.item);
  return '';
}
function paintNav(){
  const v=navStack[navStack.length-1];
  if(!v){ goHomeNav(); return; }
  showDetail();
  /* the account view follows the shared profile spec: no app title block,
     no marketing copy, the avatar leads */
  setAppbar(v.type!=='account');
  const backTxt = navStack.length>1 ? titleOf(navStack[navStack.length-2]) : 'All zones';
  const meta=subOf(v);
  detailEl.innerHTML =
    `<button class="navback" id="navback"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="m15 18-6-6 6-6"/></svg><span>${esc(backTxt)}</span></button>`
    + (v.type==='account' ? '' :
        `<h2 class="vtitle">${esc(titleOf(v))}</h2>`
        + (meta?`<p class="meta">${meta}</p>`:''))
    + bodyOf(v);
  document.getElementById('navback').onclick=popView;
  wireBody(v);
  applyMapForView(v);
  const p=document.getElementById('panel'); if(p) p.scrollTop=0;
}
function wireBody(v){
  if(v.type==='zone'){
    detailEl.querySelectorAll('#splist .srow[data-sp]').forEach(row=>{
      if(FISH_ID.some(f=>f.match.some(m=>row.dataset.sp.toLowerCase().includes(m))))
        row.onclick=()=>pushView({type:'fish',name:row.dataset.sp});
      else row.classList.add('flat');
    });
  } else if(v.type==='fish'){
    detailEl.querySelectorAll('.srow[data-z]').forEach(row=>row.onclick=()=>pushView({type:'zone',z:Number(row.dataset.z)}));
  } else if(v.type==='water'||v.type==='place'){
    const zb=document.getElementById('wzone'); if(zb&&v.w.z) zb.onclick=()=>pushView({type:'zone',z:Number(v.w.z)});
  } else if(v.type==='catchlog'){ wireCatchlog();
  } else if(v.type==='account'){ wireAccount();
  } else if(v.type==='shared'){ wireShared(v.item); }
}
function applyMapForView(v){
  if(v.type==='zone'){ selectedZone=v.z; exploreSpecies=null; restyleZones(); paintTiles(); zoomToZone(v.z);
    if(('#zone='+v.z)!==location.hash) history.replaceState(null,'','#zone='+v.z); }
  else if(v.type==='fish'){ exploreSpecies=v.name; selectedZone=null;
    if(typeof setOverlay==='function' && typeof overlayOn!=='undefined' && !overlayOn) setOverlay(true);
    restyleZones(); paintTiles(); }
  else { exploreSpecies=null; restyleZones(); paintTiles();
    if(IS_MAP && v.w && v.w.lat!=null) goToWater(v.w.n,v.w.lat,v.w.lng,null); }
}
function pushView(v){ navStack.push(v); paintNav(); }
function replaceRoot(v){ navStack=[v]; paintNav(); }
function popView(){ buzz(6); navStack.pop(); if(navStack.length) paintNav(); else goHomeNav(); }
function refreshNav(){ if(navStack.length) paintNav(); }
function goHomeNav(){ navStack=[]; selectedZone=null; exploreSpecies=null; lastWater=null;
  restyleZones(); paintTiles();
  history.replaceState(null,'',location.pathname+location.search);
  searchEl.value=''; gsearch.classList.remove('has'); restoreList(); }
function clearZone(){ goHomeNav(); }
function selectZone(z){
  z=Number(z);
  searchEl.value=''; gsearch.classList.remove('has');
  if(z===selectedZone && navStack.length<=1){ goHomeNav(); return; }  // tapping the live zone clears it
  const fromHome=(function(){ const mh=document.getElementById('mainhome'); return mh&&!mh.hidden; })();
  replaceRoot({type:'zone',z});
  if(fromHome) detailEl.scrollIntoView({behavior:'smooth',block:'start'});
}

function speciesRow(r, st, ss){
  const soon = ss && ss.soon ? `<div class="mt">${ss.soon.type==='closing'?'Closes':'Opens'} in ${ss.soon.days} days</div>` : '';
  return `<div class="srow" data-st="${st}" data-sp="${esc(r.species)}"><div class="col">
      <div class="nm">${esc(r.species)}</div>
      <div class="mt">${esc(r.season)}</div>
      <div class="mt">${esc(r.limits)}</div>${soon}
    </div><span class="pill ${st}">${label(st)}</span></div>`;
}

function zoneBody(z){
  const d=REG[z];
  if(!d) return `<p class="empty">No data for zone ${z}.</p>`;
  const info=(d.general_info||[]).filter(Boolean);
  const sp=[...(d.species_regulations||[])].sort(bySpecies);   // closed first, then popularity
  const wb=d.waterbody_exceptions||[];
  const descr=(zoneMeta[z]&&zoneMeta[z].descr)||'';
  let html=`<div class="seclabel grey" style="margin-top:16px">Species and limits</div>
    <div id="splist">${sp.map(r=>{const ss=seasonStatus(r.season); return speciesRow(r, ss.status, ss);}).join('')}</div>`;
  if(wb.length){
    html+=`<details class="blk"><summary>Waterbody exceptions <span class="rcount">${wb.length}</span></summary>
      <div class="body">${wb.map(w=>`<div class="wb"><b>${esc(w.waterbody)}</b>${
        w.rules&&w.rules.length?`<ul>${w.rules.map(r=>`<li>${esc(r)}</li>`).join('')}</ul>`:''
      }</div>`).join('')}</div></details>`;
  }
  if(info.length||descr){
    html+=`<details class="blk"><summary>General information <span class="rcount">${info.length}</span></summary>
      <div class="body">${info.length?`<ul>${info.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>`:''}
      ${descr?`<li style="list-style:none;margin-top:8px" class="mt">${esc(descr)}</li>`:''}</div></details>`;
  }
  return html;
}

/* ---------------- waterbody search ---------------- */
let waterMarker=null;
function clearPin(){ if(waterMarker){ waterMarker.remove(); waterMarker=null; } }
function goToWater(name,lat,lng,z){
  clearPin();
  waterMarker=L.marker([lat,lng]).addTo(map);
  const el=document.createElement('div');
  const nm=document.createElement('div'); nm.textContent=name; el.appendChild(nm);
  const rm=document.createElement('a'); rm.href='#'; rm.textContent='Remove pin';
  rm.style.cssText='color:#B0574A;font-weight:600;font-size:12px;text-decoration:underline';
  rm.onclick=ev=>{ ev.preventDefault(); clearPin(); };
  el.appendChild(rm);
  waterMarker.bindPopup(el).openPopup();
  map.setView([lat,lng], 8);
  if(z) selectZone(z);
}
const IS_MAP = (typeof goToWater==='function');
const gsearch=document.getElementById('gsearch');
const gclear=document.getElementById('gclear');
const rbox=document.getElementById('gresults');
/* the search view lives in the guide panel and opens from the header button */
const searchview=document.getElementById('searchview');
function showSearchView(){ if(searchview) searchview.hidden=false; try{ searchEl.focus(); }catch(e){} }
function hideSearchView(){ if(searchview) searchview.hidden=true; }
let searchSeq=0;
let lastWater=null;
let navStack=[];   /* the detail panel is a stack: one back button pops it, home when empty */
function homeSections(on){ ['mainhome','fishhome'].forEach(id=>{ const e=document.getElementById(id); if(e) e.hidden=!on; }); }
/* the app title block above the panel; the account view hides it */
function setAppbar(on){ const a=document.querySelector('.appbar'); if(a) a.hidden=!on; }
function showDetail(){ if(typeof exitMapTab==='function') exitMapTab(); rbox.hidden=true; detailEl.hidden=false; homeSections(false);
  { var _lh=document.getElementById('learnhome'), _mh2=document.getElementById('morehome'); if(_lh) _lh.hidden=true; if(_mh2) _mh2.hidden=true; }
  /* microtask: runs after the caller has set the new content but before paint,
     so the whole panel rises in exactly once per open */
  Promise.resolve().then(()=>{ detailEl.classList.remove('anim'); void detailEl.offsetWidth; detailEl.classList.add('anim'); }); }
function showResults(){ rbox.hidden=false; detailEl.hidden=true; homeSections(false); }
function restoreList(){ rbox.hidden=true; rbox.innerHTML=''; detailEl.hidden=true; detailEl.innerHTML='';
  setAppbar(true); homeSections(true); if(typeof clearPin==='function') clearPin(); }

// Word based matching; filler words are ignored so "zone 15 walleye" works.
const FILLERS=['zone','lake','the'];
function qTokens(q){ return q.toLowerCase().split(/\s+/).filter(t=>t&&!FILLERS.includes(t)); }
function matchName(name,tokens){ const n=name.toLowerCase(); return tokens.length&&tokens.every(t=>n.includes(t)); }
function catOf(r){
  if(r.kind==='zone') return 'zone';
  if(r.epark) return 'park';
  if(r.fish) return 'fish';
  if(r.place){ const t=(r.ptype||'').toLowerCase();
    if(t.includes('park')) return 'park';
    if(t==='island'||t==='area') return 'area';
    return 'town'; }
  return 'water';
}
const CAT_RANK={zone:0,water:1,park:2,town:3,fish:4,area:5};
function pill(r){
  const c=catOf(r);
  if(c==='zone') return ['Zone','zone'];
  if(c==='fish') return ['Fish','fish'];
  if(c==='park') return ['Park','park'];
  if(c==='area') return ['Area','area'];
  if(c==='town') return ['Town','town'];
  return ['Water','water'];
}
function score(r,q){
  const n=r.n.toLowerCase(), ql=q.trim().toLowerCase();
  if(n===ql) return 12;
  if(n.startsWith(ql)) return 6;
  return 0;
}
function parkBase(n){
  return n.toLowerCase().replace(/\s+(provincial|national)\s+park$/,'').replace(/\s+park$/,'').trim();
}
function finalize(list,q){
  list=list.filter(r=>!/queen elizabeth ii wildlands|dalton digby wildlands/i.test(r.n||''));
  const best={};
  list.forEach(r=>{ if(catOf(r)!=='park') return;
    const b=parkBase(r.n), pr=r.epark?3:(/\b(provincial|national) park\b/i.test(r.n)?2:1);
    if(!best[b]||pr>best[b].pr) best[b]={r,pr}; });
  list=list.filter(r=>catOf(r)!=='park'||best[parkBase(r.n)].r===r);
  const seen=new Set(); const out=[];
  list.forEach(r=>{ const k=catOf(r)+'|'+r.n.toLowerCase();
    if(seen.has(k)) return; seen.add(k); out.push(r); });
  out.sort((a,b)=>(CAT_RANK[catOf(a)]??9)-(CAT_RANK[catOf(b)]??9) || score(b,q)-score(a,q));
  const caps={zone:2,fish:4,water:8,park:3,town:3,area:2}, used={};
  const capped=[];
  out.forEach(r=>{ const c=catOf(r); used[c]=(used[c]||0)+1;
    if(used[c]<=(caps[c]??3)) capped.push(r); });
  return capped.slice(0,15);
}
function buildLocal(q){
  const tokens=qTokens(q); const out=[];
  tokens.forEach(t=>{ const num=parseInt(t,10);
    if(String(num)===t && num>=1 && num<=20 && REG[num])
      out.push({kind:'zone', n:'Zone '+num, z:num,
        sub:(REG[num].species_regulations||[]).length+' species · Seasons and limits'}); });
  if(tokens.length){
    const joined=tokens.join(' ');
    // Search the individual game fish so "sauger" or "smallmouth bass" each get
    // their own result, then resolve to the (sometimes combined) regulation.
    const seen={};
    FISH_ID.filter(f=>{
      const nl=f.name.toLowerCase();
      if(nl===joined) return true;
      const words=nl.split(/[^a-z]+/).filter(Boolean);
      return tokens.some(t=>words.includes(t) || f.match.some(m=>m===t));   // a fish only answers to a fully typed word
    }).slice(0,5).forEach(f=>{
      if(seen[f.name]) return; seen[f.name]=1;
      const zc=Object.keys(fishRegInfo(f.name).merged).length;
      out.push({fish:true, n:f.name, sub:'In '+zc+' '+(zc===1?'zone':'zones')});
    });
  }
  WATER.forEach(w=>{ if(matchName(w[0],tokens)){ const z=zoneAt(w[2],w[1]);
    if(/\bpark$/i.test(w[0]))
      out.push({n:w[0], lat:w[1], lng:w[2], z:z, place:true, ptype:'Park',
        sub:[z?('Zone '+z):'', 'Park'].filter(Boolean).join(' · ')});
    else
      out.push({n:w[0], lat:w[1], lng:w[2], z:z, curated:true, sub:z?('Zone '+z):'Ontario'}); }});
  /* Universal search: the Ontario provincial parks resolve to their fishing zone. */
  if(window.ECO && tokens.length){
    window.ECO.parks.forEach(pk=>{ if(!pk.fmz) return;
      const hay=(pk.name+' '+(pk.region||'')).toLowerCase();
      if(tokens.every(t=>hay.indexOf(t)>=0))
        out.push({n:pk.name, z:pk.fmz, epark:true, sub:'Zone '+pk.fmz+' · Provincial park'}); });
  }
  return out;
}
function renderResults(list, pending){
  if(!list.length){ rbox.innerHTML='<div class="gnone">'+(pending?'Searching':'No matches.')+'</div>'; return; }
  rbox.innerHTML=list.map((r,i)=>{ const p=pill(r);
    return `<button class="gresult" data-i="${i}"><span class="tag ${p[1]}">${p[0]}</span>`
      +`<span class="grow"><span class="gt">${esc(r.n)}</span><span class="gs">${esc(r.sub||'')}</span></span></button>`;
  }).join('');
  rbox.querySelectorAll('.gresult').forEach(el=>el.onclick=()=>gotoResult(list[Number(el.dataset.i)]));
}
function gotoResult(r){
  searchEl.value=r.n; gsearch.classList.add('has');
  if(r.kind==='zone'){ replaceRoot({type:'zone',z:Number(r.z)}); return; }
  if(r.epark && r.z){ replaceRoot({type:'zone',z:Number(r.z)}); return; }
  if(r.fish){ openFishView(r.n); return; }
  openWater(r);
}
function onSearch(){
  const q=searchEl.value;
  gsearch.classList.toggle('has', !!q.trim());
  const seq=++searchSeq;
  if(!q.trim()){ rbox.hidden=true; rbox.innerHTML='';
    if(navStack.length) paintNav(); else restoreList(); return; }
  /* the journal's console words belong to the journal */
  if(['debugsearch','statsearch','dummydata','dummyhundop','-dummyhundop','forlaurie'].includes(q.trim().toLowerCase())){
    showResults(); renderResults([],false); return; }
  showResults();
  const stillLoading=q.trim().length>=3;
  renderResults(finalize(buildLocal(q), q), stillLoading);
  if(!stillLoading) return;
  setTimeout(()=>{
    if(seq!==searchSeq) return;
    let remP=[], remC=[], pr={places:[],waters:[]}, stk=[], outstanding=0;
    const paint=()=>{
      if(seq!==searchSeq) return;
      const remAll=remC.length?remC:remP;
      pr.places.forEach(pl=>{ if(pl.z==null) pl.z=zoneAt(pl.lng,pl.lat); });
      /* every place-like result gets a location under its name, curated rows included */
      const all=buildLocal(q).concat(pr.places, remAll);
      all.forEach(w=>{
        if(w.kind==='zone'||w.fish) return;
        if(!w.loc){
          const e=pr.waters.find(x=>x.nl===w.n.toLowerCase()&&(!x.z||!w.z||x.z===w.z))
              ||pr.waters.find(x=>x.nl===w.n.toLowerCase());
          if(e&&e.loc) w.loc=e.loc;
        }
        if(!w.loc){ const g=pr.places.find(x=>x!==w&&x.n.toLowerCase()===w.n.toLowerCase());
          if(g&&g.loc) w.loc=g.loc; }
        if(!w.loc){ const t=stk.find(x=>x.n.toLowerCase()===w.n.toLowerCase()&&(x.town||x.dist));
          if(t) w.loc=titleCase(t.town||'')||t.dist; }
        w.sub=[w.z?('Zone '+w.z):'', w.loc||''].filter(Boolean).join(' · ')||w.sub||'Ontario';
      });
      renderResults(finalize(all, q), outstanding>0);
    };
    const track=(prom,assign)=>{ outstanding++;
      prom.then(assign).catch(()=>{}).then(()=>{ outstanding--; paint(); }); };
    track(araPrefix(q), v=>{ remP=v; });
    track(araSearch(q), v=>{ remC=v; });
    track(placeSearch(q), v=>{ pr=v; });
    track(searchStocked(q), v=>{ stk=v; });
  },200);
}
searchEl.addEventListener('input', onSearch);
gclear.addEventListener('click', ()=>{ searchEl.value=''; onSearch(); });
searchEl.addEventListener('keydown', e=>{ if(e.key==='Escape'){ searchEl.value=''; onSearch(); searchEl.blur(); hideSearchView(); } });

function metaLine(w){
  const parts=[];
  if(w.z) parts.push('Zone '+w.z);
  if(w.type) parts.push(w.type);
  if(w.area) parts.push(w.area.toLocaleString()+' ha');
  if(w.maxd) parts.push('Max depth '+w.maxd+' m');
  else if(w.meand) parts.push('Mean depth '+w.meand+' m');
  if(w.loc) parts.push(w.loc);
  return parts.join(' · ');
}
function curWaterIs(w){ const v=navStack[navStack.length-1]; return v&&(v.type==='water'||v.type==='place')&&v.w===w; }
function openWater(w){
  if(w.place){ replaceRoot({type:'place',w}); return; }
  if(IS_MAP){
    if(w.curated && w.lat!=null) goToWater(w.n,w.lat,w.lng,null);
    else if(w.lid) araCentre(w.lid).then(c=>{ if(c&&curWaterIs(w)) goToWater(w.n,c.lat,c.lng,null); }).catch(()=>{});
  }
  replaceRoot({type:'water',w});
  if(w.curated){
    araSearch(w.n).then(list=>{
      const hit=list.find(x=>x.n.toLowerCase()===w.n.toLowerCase());
      if(hit&&curWaterIs(w)){ Object.assign(w,{lat:hit.lat,lng:hit.lng,curated:false,lid:hit.lid,area:hit.area,maxd:hit.maxd,meand:hit.meand,species:hit.species,z:w.z||hit.z}); refreshNav(); }
    }).catch(()=>{});
  }
}
/* place (town or park): body only; header/title/meta come from the nav frame */
function placeBody(w){
  const sjId=/park/i.test(w.ptype||'')?SJ_PARK_IDS[parkBase(w.n)]:null;
  let html='';
  if(w.z||sjId) html+=`<div class="filters" style="margin-top:14px">`
    +(w.z?`<button class="fchip on" id="wzone">Zone ${w.z} rules</button>`:'')
    +(sjId?`<a class="fchip on" href="${SJ_URL}#park=${sjId}">Open in ON Camp</a>`:'')
    +`</div>`;
  html+=`<p class="meta" style="margin-top:14px">Place data from the Canadian Geographical Names Database.</p>`;
  return html;
}
/* water body: body only */
function waterBody(w){
  let html='';
  if(w.z) html+=`<div class="filters" style="margin-top:14px"><button class="fchip on" id="wzone">Zone ${w.z} rules</button></div>`;
  const rows=[];
  if(w.z) rows.push(['Zone','Zone '+w.z]);
  if(w.area) rows.push(['Surface area',w.area.toLocaleString()+' ha']);
  if(w.maxd) rows.push(['Max depth',w.maxd+' m']);
  if(w.meand) rows.push(['Mean depth',w.meand+' m']);
  if(w.loc) rows.push(['County or district',w.loc]);
  if(rows.length){
    html+=`<div class="seclabel grey">Details</div>`+rows.map(r=>
      `<div class="rrow"><span>${esc(r[0])}</span><span class="rcount">${esc(r[1])}</span></div>`).join('');
  }
  if(w.species && w.species.length){
    html+=`<div class="seclabel grey">Fish found here</div>
      <div class="spwrap">${sortSpecies(w.species).map(x=>`<span class="spchip">${esc(x)}</span>`).join('')}</div>`;
  }
  html+=`<div class="seclabel grey">Stocking</div><div id="wstock"><p class="empty">Checking stocking records</p></div>
    <p class="meta" style="margin-top:14px">Lake data from Fish ON-Line and MNRF stocking records.</p>`;
  /* fill the async pieces after this body is in the DOM */
  Promise.resolve().then(()=>fillWaterAsync(w));
  return html;
}
function fillWaterAsync(w){
  if(!w.loc && !w._locTried){
    w._locTried=true;
    placeSearch(w.n).then(pr=>{
      const e=pr.waters.find(x=>x.nl===w.n.toLowerCase()&&(!x.z||!w.z||x.z===w.z))
        ||pr.waters.find(x=>x.nl===w.n.toLowerCase());
      if(e&&e.loc){ w.loc=e.loc; if(curWaterIs(w)) refreshNav(); return; }
      return searchStocked(w.n).then(list=>{
        const t=list.find(x=>x.n.toLowerCase()===w.n.toLowerCase()&&(x.town||x.dist));
        if(t){ w.loc=titleCase(t.town||'')||t.dist; if(curWaterIs(w)) refreshNav(); }
      });
    }).catch(()=>{});
  }
  searchStocked(w.n).then(list=>{
    const el=document.getElementById('wstock'); if(!el||!curWaterIs(w)) return;
    const hits=list.filter(x=>x.n.toLowerCase()===w.n.toLowerCase());
    if(!hits.length){ el.innerHTML='<p class="empty">No stocking records since 2017.</p>'; return; }
    const sp={}; hits.forEach(h=>Object.entries(h.sp).forEach(([x,y])=>{ sp[x]=Math.max(sp[x]||0,y); }));
    const where=[hits[0].town, hits[0].dist].filter(Boolean).join(' · ');
    el.innerHTML=(where?`<p class="meta" style="margin:0 0 8px">${esc(where)}</p>`:'')+
      Object.entries(sp).sort((a,b)=>b[1]-a[1]).map(([x,y])=>
        `<div class="rrow"><span>${esc(x)}</span><span class="rcount">Last stocked ${y}</span></div>`).join('');
  }).catch(()=>{ const el=document.getElementById('wstock'); if(el&&curWaterIs(w)) el.innerHTML='<p class="empty">Stocking data not reachable.</p>'; });
}
/* ---------------- species explorer ---------------- */
for(const z in REG) for(const r of REG[z].species_regulations||[]){
  (speciesMap[r.species]=speciesMap[r.species]||{})[z]={season:r.season,limits:r.limits};
}
/* ---------------- fish id ---------------- */
function fishIdCards(regName){
  const nl=(regName||'').toLowerCase();
  const hits=FISH_ID.filter(f=>f.match.some(m=>nl.includes(m)));
  if(!hits.length) return '';
  return hits.map(f=>`<div class="idcard">
      <img loading="lazy" src="fish/${f.img}.jpg" alt="${esc(f.name)}">
      <div class="idbody">
        <div class="idname">${esc(f.name)}</div>
        <div class="seclabel grey" style="margin:10px 0 6px">How to tell</div>
        <ul class="idtell">${f.tell.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>
        <div class="idrow"><b>Eats:</b> ${esc(f.eat)}</div>
        <div class="idrow"><b>Bites on:</b> ${esc(f.bite)}</div>
      </div></div>`).join('');
}
function allRegSpecies(){
  const names=new Set();
  Object.values(REG).forEach(z=>(z.species_regulations||[]).forEach(r=>names.add(r.species)));
  return [...names];
}
function openFishCard(f){ openFishView(f.name); }
// Resolve an individual fish (or a regulation name) to every regulation entry it
// is listed under, and the union of zones. Ontario regulates some species as a
// group (largemouth + smallmouth bass share one season and a pooled limit), and
// a species can be combined in most zones but split in one (e.g. Zone 20), so a
// fish's zones come from every matching entry.
function fishRegInfo(name){
  const nl=name.toLowerCase();
  const f=FISH_ID.find(x=>x.name.toLowerCase()===nl) || FISH_ID.find(x=>x.match.some(m=>nl.includes(m)));
  const matchers = f ? f.match.slice() : [nl];
  // exact regulation name passed straight through (e.g. from an older link)
  if(speciesMap[name] && !f) matchers.length && (matchers[0]=nl);
  const merged={}, regNames=new Set();
  allRegSpecies().forEach(n=>{ const s=n.toLowerCase();
    if(/^aggregate limits/i.test(n)) return;
    if(speciesMap[name]===undefined ? matchers.some(m=>s.includes(m)) : (n===name || matchers.some(m=>s.includes(m)))){
      const zm=speciesMap[n]||{}; let touched=false;
      Object.keys(zm).forEach(z=>{ if(!merged[z]){ merged[z]={rec:zm[z], reg:n}; touched=true; } });
      if(touched || n===name) regNames.add(n);
    }
  });
  return { merged, regNames:[...regNames], fish:f };
}
(function(){
  const l=document.getElementById('fishlist');
  if(l){
    l.innerHTML=FISH_ID.map((f,i)=>`<button class="frow" data-i="${i}">${esc(f.name)}</button>`).join('');
    l.querySelectorAll('.frow').forEach(el=>el.onclick=()=>openFishCard(FISH_ID[Number(el.dataset.i)]));
  }
  const g=document.getElementById('fgallery'); if(!g) return;
  g.innerHTML=FISH_ID.map((f,i)=>`<button class="fcard" data-i="${i}">
      <img loading="lazy" src="fish/${f.img}.jpg" alt="${esc(f.name)}"><span>${esc(f.name)}</span></button>`).join('');
  g.querySelectorAll('.fcard').forEach(el=>el.onclick=()=>openFishCard(FISH_ID[Number(el.dataset.i)]));
})();
/* start a fresh fish page from home or search */
function openFishView(name){ replaceRoot({type:'fish',name}); }
/* fish page body: the picture and identification, then where it is open by zone.
   The name lives once in the nav title, never repeated in the card. */
function fishBody(name){
  const info=fishRegInfo(name);
  const f=info.fish, merged=info.merged, present=[];
  for(let z=1;z<=20;z++){ if(merged[z]) present.push({z,rec:merged[z].rec,st:seasonStatus(merged[z].rec.season).status}); }
  let html='';
  if(f){
    html+=`<div class="idcard" style="margin-top:14px">
      <img loading="lazy" src="fish/${f.img}.jpg" alt="${esc(f.name)}">
      <div class="idbody">
        <div class="seclabel grey" style="margin:0 0 6px">How to tell</div>
        <ul class="idtell">${f.tell.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>
        <div class="idrow"><b>Eats:</b> ${esc(f.eat)}</div>
        <div class="idrow"><b>Bites on:</b> ${esc(f.bite)}</div>
      </div></div>`;
  }
  // If the season/limit is shared with another species, say so plainly: the
  // catch limit for a combined group is one shared total, not per species.
  const combinedReg=info.regNames.find(n=>/ combined$| and /i.test(n));
  if(combinedReg){
    const grp=combinedReg.replace(/\s+combined$/i,'');
    html+=`<div class="combinednote">In most zones Ontario manages ${esc(grp)} together: they share one season, and the catch limit is a shared total, not a separate limit for each.</div>`;
  }
  html+=`<div class="seclabel grey">Seasons by zone</div>`
    + (present.length?present.map(r=>`<button class="srow" data-z="${r.z}" data-st="${r.st}"><div class="col">
        <div class="nm">Zone ${r.z}</div>
        <div class="mt">${esc(r.rec.season)}</div>
        <div class="mt">${esc(r.rec.limits)}</div>
      </div><span class="pill ${r.st}">${label(r.st)}</span></button>`).join('')
      : `<p class="empty">Not listed in the zone tables.</p>`);
  return html;
}

/* The trailing chevron, the same glyph inlined on the rows in index.html. */
const CHEV='<svg viewBox="0 0 8 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l6 6-6 6"/></svg>';

/* ---------------- sheets ---------------- */
const backdrop=document.getElementById('backdrop');
const versionsEl=document.getElementById('versions');
const catchSheetEl=document.getElementById('catchsheet');
const catchDetailSheetEl=document.getElementById('catchdetail');
function closeModals(){
  document.querySelectorAll('.sheet.on').forEach(function(s){ s.classList.remove('on'); });
  backdrop.classList.remove('on');
  document.documentElement.classList.remove('sheet-lock');
}
function fillAboutStats(){
  var el=document.getElementById('aboutStats'); if(!el) return;
  var zones=(typeof REG!=='undefined')?Object.keys(REG).length:20;
  var fish=(typeof FISH_ID!=='undefined')?FISH_ID.length:0;
  var ver=document.getElementById('verbtn');
  function row(k,v){ return '<div class="ios-row ios-row--plain"><span class="ios-row-body"><span class="ios-row-title">'+k+'</span></span>'
    +'<span class="ios-row-value">'+v+'</span></div>'; }
  el.innerHTML=row('Fishing zones',zones)+row('Game fish',fish)
    +row('Version', ver?ver.textContent:'');
}
/* the page behind a sheet is scroll-locked so the sheet top stays reachable */
function openModal(el){ closeModals(); el.classList.add('on'); backdrop.classList.add('on'); el.scrollTop=0;
  document.documentElement.classList.add('sheet-lock'); }

/* ==================================================================
   Catch log + share
   A private, on-device journal of what you catch, and a share that puts a
   clean card and a #/shared/<data> deep link into the iMessage share sheet.
   The link carries the whole catch (or day), so a recipient opens the exact
   same card. No server, nothing tracked. share.js renders the card. */
function clToast(msg){
  var t=document.createElement('div'); t.className='cl-toast'; t.textContent=msg;
  document.body.appendChild(t);
  requestAnimationFrame(function(){ t.classList.add('on'); });
  setTimeout(function(){ t.classList.remove('on'); setTimeout(function(){ t.remove(); }, 240); }, 1900);
}
function pad2(n){ return (n<10?'0':'')+n; }
function fishToday(){ var d=new Date(); return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate()); }
function dayKey(iso){ var d=new Date(iso); if(isNaN(d)) return String(iso).slice(0,10); return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate()); }
function fmtDayLabel(key){ var d=new Date(key+'T12:00:00'); if(isNaN(d)) return key;
  return d.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'}); }
/* timeline day headers, the wildlife journal read: Today, Yesterday, then dates */
function fmtDayHead(key){
  var d=new Date(key+'T12:00:00'); if(isNaN(d)) return key;
  var now=new Date();
  var t0=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  var d0=new Date(d.getFullYear(),d.getMonth(),d.getDate());
  var diff=Math.round((t0-d0)/86400000);
  if(diff===0) return 'Today';
  if(diff===1) return 'Yesterday';
  var opts={weekday:'short',month:'short',day:'numeric'};
  if(d.getFullYear()!==now.getFullYear()) opts.year='numeric';
  return d.toLocaleDateString('en-CA',opts);
}
function fmtTimeShort(iso){
  var d=new Date(iso); if(isNaN(d)) return '';
  var h=d.getHours(), m=d.getMinutes(), ap=h>=12?'PM':'AM';
  h=h%12; if(h===0) h=12;
  return h+':'+pad2(m)+' '+ap;
}
function uidc(){ return 'c'+Date.now().toString(36)+Math.random().toString(36).slice(2,6); }
function cval(id){ var e=document.getElementById(id); return e?(e.value||''):''; }

function loadCatches(){ try{ return JSON.parse(localStorage.getItem('onfish-catchlog')||'[]'); }catch(e){ return []; } }
function saveCatches(a){ try{ localStorage.setItem('onfish-catchlog', JSON.stringify(a)); }catch(e){} }
function addCatch(c){ var a=loadCatches(); a.unshift(c); saveCatches(a); }
function delCatch(id){ saveCatches(loadCatches().filter(function(c){ return c.id!==id; })); }
function groupByDay(cats){
  var map={}, order=[];
  cats.forEach(function(c){ var k=dayKey(c.when); if(!map[k]){ map[k]=[]; order.push(k); } map[k].push(c); });
  order.sort(function(a,b){ return a<b?1:a>b?-1:0; });   // newest day first
  return order.map(function(k){ return { date:k, items:map[k] }; });
}

function catchRow(c){
  var sub=[fmtTimeShort(c.when),
    (c.len!=null&&c.len!=='')?(c.len+' '+(c.unit||'cm')):'',
    c.rel?'Released':'Kept',
    c.water?esc(c.water):''].filter(Boolean).join(' · ');
  var tile=c.img
    ?'<span class="ios-tile cl-fishtile"><img src="fish/'+esc(c.img)+'.jpg" alt=""></span>'
    :'<span class="ios-tile ios-tile--blue"><svg aria-hidden="true"><use href="assets/icons.svg#fish"/></svg></span>';
  return '<button class="ios-row" type="button" data-open-catch="'+esc(c.id)+'">'
    +tile
    +'<span class="ios-row-body"><span class="ios-row-title">'+esc(c.sp)+'</span>'
    +'<span class="ios-row-sub">'+sub+'</span></span>'
    +'<span class="ios-chevron"><svg aria-hidden="true"><use href="assets/icons.svg#chevron-right"/></svg></span>'
    +'</button>';
}
function catchlogBody(){
  var cats=loadCatches();
  var entry='<div class="ios-group" style="margin-top:14px">'
    +'<button class="ios-row" id="cl-open-form" type="button">'
    +'<span class="ios-tile ios-tile--blue"><svg aria-hidden="true"><use href="assets/icons.svg#plus"/></svg></span>'
    +'<span class="ios-row-body"><span class="ios-row-title">Log a catch</span>'
    +'<span class="ios-row-sub">Species, size, water and notes</span></span>'
    +'<span class="ios-chevron"><svg aria-hidden="true"><use href="assets/icons.svg#chevron-right"/></svg></span>'
    +'</button></div>';
  /* the quiet cross-app note, always the last thing on the screen */
  var note='<div class="ios-group">'
    +'<a class="ios-row" id="cl-wildlife-link" href="https://katsuma0.github.io/on-wildlife/" target="_blank" rel="noopener">'
    +'<span class="ios-tile ios-tile--green"><svg aria-hidden="true"><use href="assets/icons.svg#paw"/></svg></span>'
    +'<span class="ios-row-body"><span class="ios-row-title">Open ON Wildlife</span></span>'
    +'<span class="ios-chevron"><svg aria-hidden="true"><use href="assets/icons.svg#link-out"/></svg></span>'
    +'</a></div>'
    +'<p class="ios-group-foot">Your catches also appear in the ON Wildlife journal.</p>';
  if(!cats.length) return entry
    +'<p class="empty">No catches yet. Log your first one, then share the card straight to Messages.</p>'+note;
  /* An honest, unfinished count. Ontario has a fixed list of game fish, so how
     many you have caught is a real number with a real ceiling, and the gap is
     what gets an angler back out on the water. */
  var seen={}; cats.forEach(function(c){ if(c.sp) seen[c.sp]=1; });
  var got=Object.keys(seen).length, tot=FISH_ID.length;
  var out=entry
    +'<div class="clprog"><div class="clprog-top"><span>Species caught</span>'
    +'<span class="clprog-n tnum">'+got+' of '+tot+'</span></div>'
    +'<span class="clprog-bar"><span class="clprog-fill" style="width:'+Math.max(2,Math.round(got/tot*100))+'%"></span></span></div>';
  groupByDay(cats).forEach(function(g){
    out+='<div class="cl-day"><div class="cl-dayhead"><span class="group-header">'+esc(fmtDayHead(g.date))+'</span>'
      +'<button class="cl-share cl-shareday" data-share-day="'+esc(g.date)+'" type="button">Share day</button></div>'
      +'<div class="ios-group">';
    g.items.forEach(function(c){ out+=catchRow(c); });
    out+='</div></div>';
  });
  return out+note;
}
function wireCatchlog(){
  var open=document.getElementById('cl-open-form');
  if(open) open.onclick=function(){ openCatchForm(); };
  detailEl.querySelectorAll('[data-share-day]').forEach(function(b){ b.onclick=function(){ shareDay(b.getAttribute('data-share-day')); }; });
  detailEl.querySelectorAll('[data-open-catch]').forEach(function(b){ b.onclick=function(){ openCatchDetail(b.getAttribute('data-open-catch')); }; });
}
/* ---- the log form, a bottom sheet like the wildlife log sheet ---- */
function catchFormHtml(){
  var speciesOpts=FISH_ID.map(function(f){ return '<option value="'+esc(f.name)+'">'+esc(f.name)+'</option>'; }).join('');
  var zoneOpts=''; for(var z=1;z<=20;z++) zoneOpts+='<option value="'+z+'">Zone '+z+'</option>';
  /* Three labelled chunks rather than one run of eight fields. Nobody holds
     eight things in their head, and on a boat they are holding a rod too. */
  return '<div class="cl-sec">What</div>'
    +'<label class="cl-field"><span>Species</span><select id="cf-sp">'+speciesOpts+'</select></label>'
    +'<label class="cl-field"><span>Zone</span><select id="cf-z">'+zoneOpts+'</select></label>'
    +'<label class="cl-field"><span>Water</span><input id="cf-water" placeholder="Lake or river (optional)"></label>'
    +'<div class="cl-sec">Details</div>'
    +'<div class="cl-row">'
      +'<label class="cl-field grow"><span>Length</span><input id="cf-len" type="number" inputmode="decimal" min="0" step="0.1" placeholder="optional"></label>'
      +'<label class="cl-field"><span>Unit</span><select id="cf-unit"><option>cm</option><option>in</option></select></label>'
    +'</div>'
    +'<div class="cl-row">'
      +'<label class="cl-field grow"><span>Kept or released</span><select id="cf-rel"><option value="1">Released</option><option value="0">Kept</option></select></label>'
      +'<label class="cl-field grow"><span>Date</span><input id="cf-date" type="date" value="'+fishToday()+'"></label>'
    +'</div>'
    +'<div class="cl-sec">Notes</div>'
    +'<label class="cl-field"><textarea id="cf-notes" rows="2" placeholder="Bait, weather, who you were with (optional)"></textarea></label>'
    +'<button class="btn" id="cf-save" style="width:100%;margin-top:6px">Save catch</button>';
}
function openCatchForm(){
  var body=document.getElementById('catchsheet-body'); if(!body||!catchSheetEl) return;
  body.innerHTML=catchFormHtml();
  openModal(catchSheetEl);   /* no autofocus: the keyboard waits until a field is tapped */
  var save=document.getElementById('cf-save');
  if(save) save.onclick=function(){
    var sp=cval('cf-sp'); if(!sp){ return; }
    var lenRaw=cval('cf-len').trim();
    var len=(lenRaw!==''&&!isNaN(parseFloat(lenRaw)))?parseFloat(lenRaw):null;
    var f=FISH_ID.filter(function(x){ return x.name===sp; })[0];
    var date=cval('cf-date');
    var when=(date&&date!==fishToday())?new Date(date+'T12:00:00').toISOString():new Date().toISOString();
    var notes=cval('cf-notes').trim();
    addCatch({ id:uidc(), sp:sp, img:f?f.img:'', z:Number(cval('cf-z'))||null,
      water:cval('cf-water').trim(), len:len, unit:cval('cf-unit')||'cm',
      rel:cval('cf-rel')==='1', when:when, notes:notes.length>240?notes.slice(0,237)+'…':notes });
    closeModals();
    if(typeof buzz==='function') buzz(10);
    clToast('Catch logged');
    replaceRoot({type:'catchlog'});
  };
}
/* ---- catch detail, a sheet: the card view of one catch with its actions ---- */
function openCatchDetail(id){
  var c=loadCatches().filter(function(x){ return x.id===id; })[0]; if(!c) return;
  var body=document.getElementById('catchdetail-body'); if(!body||!catchDetailSheetEl) return;
  var rows=[];
  if(c.water) rows.push(['Water',c.water]);
  if(c.z) rows.push(['Zone','Zone '+c.z]);
  if(c.len!=null&&c.len!=='') rows.push(['Length',c.len+' '+(c.unit||'cm')]);
  rows.push(['Kept or released',c.rel?'Released':'Kept']);
  rows.push(['When',fmtDayLabel(dayKey(c.when))]);
  body.innerHTML='<div class="kind" style="margin-bottom:12px">'+esc(c.sp)+'</div>'
    +(c.img?'<img class="cd-img" src="fish/'+esc(c.img)+'.jpg" alt="'+esc(c.sp)+'">':'')
    +'<div class="ios-group" style="margin-bottom:16px">'
    +rows.map(function(r){ return '<div class="ios-row ios-row--plain">'
      +'<span class="ios-row-body"><span class="ios-row-title">'+esc(r[0])+'</span></span>'
      +'<span class="ios-row-value">'+esc(String(r[1]))+'</span></div>'; }).join('')
    +'</div>'
    +(c.notes?'<div class="ios-group" style="margin-bottom:16px"><div class="ios-row ios-row--plain">'
      +'<span class="ios-row-body"><span class="ios-row-title">Notes</span>'
      +'<span class="ios-row-sub" style="white-space:normal">'+esc(c.notes)+'</span></span></div></div>':'')
    +'<button class="btn" id="cd-share" style="width:100%" type="button">Share this catch</button>'
    +'<button class="btn ghost" id="cd-del" style="width:100%;margin-top:8px;color:var(--red)" type="button">Delete catch</button>';
  openModal(catchDetailSheetEl);
  var s=document.getElementById('cd-share'); if(s) s.onclick=function(){ shareCatch(c.id); };
  var d=document.getElementById('cd-del'); if(d) d.onclick=function(){
    delCatch(c.id); closeModals(); clToast('Catch deleted'); replaceRoot({type:'catchlog'}); };
}
function openCatchlog(openForm){ if(typeof closeModals==='function') closeModals(); if(typeof exitMapTab==='function') exitMapTab(); replaceRoot({type:'catchlog'});
  var p=document.getElementById('panel'); if(p) p.scrollTop=0;
  /* openForm must be exactly true: click handlers pass the event object */
  if(openForm===true) openCatchForm(); }

/* ==================================================================
   Account view: the avatar in the header opens it. One shared profile
   for the three outdoors apps on this origin: the display name lives
   under the JSON key 'outdoors-profile' ({name}), with a silent one
   time migration from the old per app key onfish-name. The stats come
   out of the catch log. */
var PROFILE_KEY='outdoors-profile';
(function(){ try{
  if(localStorage.getItem(PROFILE_KEY)==null){
    var old=(localStorage.getItem('onfish-name')||'').trim();
    if(old){ localStorage.setItem(PROFILE_KEY,JSON.stringify({name:old})); localStorage.removeItem('onfish-name'); }
  }
}catch(e){} })();
function displayName(){ try{ var p=JSON.parse(localStorage.getItem(PROFILE_KEY)||'null'); return ((p&&p.name)||'').trim(); }catch(e){ return ''; } }
function saveDisplayName(n){ n=String(n==null?'':n).trim();
  try{ if(n) localStorage.setItem(PROFILE_KEY,JSON.stringify({name:n})); else localStorage.removeItem(PROFILE_KEY); }catch(e){} }
function renderAvatar(){
  var b=document.getElementById('acctbtn'); if(!b) return;
  var n=displayName();
  if(n) b.textContent=n[0].toUpperCase();
  else b.innerHTML='<svg aria-hidden="true"><use href="assets/icons.svg#user"/></svg>';
}
function accountBody(){
  var cats=loadCatches(), seen={}, zones={};
  cats.forEach(function(c){ if(c.sp) seen[c.sp]=1; if(c.z) zones[c.z]=1; });
  var got=Object.keys(seen).length, zn=Object.keys(zones).length, tot=FISH_ID.length;
  var n=displayName();
  var ver=document.getElementById('verbtn');
  var logged=cats.length===1?'1 catch logged':cats.length+' catches logged';
  return '<div class="acct-hero"><div class="acct-avatar" aria-hidden="true">'
    +(n?esc(n[0].toUpperCase()):'<svg><use href="assets/icons.svg#user"/></svg>')+'</div></div>'
    +'<div class="ios-group"><label class="ios-row ios-row--plain" for="acct-name">'
    +'<span class="ios-row-body"><span class="ios-row-title">Name</span></span>'
    +'<input id="acct-name" class="acct-input" type="text" placeholder="Your name" autocomplete="name" enterkeyhint="done" value="'+esc(n)+'">'
    +'</label></div>'
    +'<p class="ios-group-foot">Shown as your avatar initial, shared with the other outdoors apps on this device. It never leaves it.</p>'
    +'<div class="acct-stats">'
    +'<div class="acct-stat"><b class="tnum">'+got+'</b><span>of '+tot+' species</span></div>'
    +'<div class="acct-stat"><b class="tnum">'+cats.length+'</b><span>'+(cats.length===1?'catch':'catches')+'</span></div>'
    +'<div class="acct-stat"><b class="tnum">'+zn+'</b><span>'+(zn===1?'zone fished':'zones fished')+'</span></div>'
    +'</div>'
    +'<div class="ios-group">'
    +'<button class="ios-row" id="acct-catchlog" type="button">'
    +'<span class="ios-tile ios-tile--blue"><svg aria-hidden="true"><use href="assets/icons.svg#fish"/></svg></span>'
    +'<span class="ios-row-body"><span class="ios-row-title">Catch log</span><span class="ios-row-sub">'+logged+'</span></span>'
    +'<span class="ios-chevron"><svg aria-hidden="true"><use href="assets/icons.svg#chevron-right"/></svg></span>'
    +'</button>'
    +'<div class="ios-row">'
    +'<span class="ios-tile ios-tile--grey"><svg aria-hidden="true"><use href="assets/icons.svg#lock"/></svg></span>'
    +'<span class="ios-row-body"><span class="ios-row-title">Visibility</span><span class="ios-row-sub">Your log stays on this phone</span></span>'
    +'<span class="ios-row-value">Private</span>'
    +'</div>'
    +'<div class="ios-row ios-row--plain">'
    +'<span class="ios-row-body"><span class="ios-row-title">Version</span></span>'
    +'<span class="ios-row-value">'+(ver?esc(ver.textContent):'')+'</span>'
    +'</div>'
    +'</div>';
}
function wireAccount(){
  var inp=document.getElementById('acct-name');
  if(inp){
    inp.oninput=function(){ saveDisplayName(inp.value); renderAvatar();
      var big=detailEl.querySelector('.acct-avatar');
      if(big){ var n=displayName();
        if(n) big.textContent=n[0].toUpperCase();
        else big.innerHTML='<svg><use href="assets/icons.svg#user"/></svg>'; } };
    inp.onkeydown=function(e){ if(e.key==='Enter') inp.blur(); };
  }
  var cl=document.getElementById('acct-catchlog'); if(cl) cl.onclick=function(){ openCatchlog(); };
}
function openAccount(){ if(typeof closeModals==='function') closeModals(); replaceRoot({type:'account'}); var p=document.getElementById('panel'); if(p) p.scrollTop=0; }

/* ---- item <-> card (sender and recipient build the card the same way) ---- */
function catchShareItem(c){
  return { t:'fish-catch', sp:c.sp, z:c.z||null, water:c.water||'',
    len:(c.len!=null&&c.len!=='')?c.len:null, unit:c.unit||'cm', rel:!!c.rel, when:c.when,
    notes:c.notes?(c.notes.length>200?c.notes.slice(0,197)+'…':c.notes):'' };
}
function catchCard(it){
  var chips=[];
  if(it.len!=null) chips.push({label: it.len+' '+(it.unit||'cm')});
  chips.push({label: it.rel?'Released':'Kept'});
  if(it.z) chips.push({label:'Zone '+it.z});
  var sub=[it.water, it.z?('Zone '+it.z):''].filter(Boolean).join(' · ');
  return { eyebrow:'on-fishing', kicker:'Catch', emoji:'🎣', title:it.sp,
    subtitle:sub, chips:chips.slice(0,4), meta:fmtDayLabel(dayKey(it.when)) };
}
function dayShareItem(key){
  var items=loadCatches().filter(function(c){ return dayKey(c.when)===key; });
  var waters=[]; var zones=[];
  items.forEach(function(c){ if(c.water&&waters.indexOf(c.water)<0) waters.push(c.water); if(c.z&&zones.indexOf(c.z)<0) zones.push(c.z); });
  return { t:'fish-day', date:key, when:(items[0]?items[0].when:key+'T12:00:00.000Z'),
    water:waters.join(', '), zones:zones.sort(function(a,b){return a-b;}),
    cs:items.map(function(c){ return { sp:c.sp, z:c.z||null, len:(c.len!=null&&c.len!=='')?c.len:null, unit:c.unit||'cm', rel:!!c.rel }; }) };
}
function dayCard(it){
  var cs=it.cs||[]; var species={}; var counts={};
  cs.forEach(function(c){ species[c.sp]=1; counts[c.sp]=(counts[c.sp]||0)+1; });
  var chips=Object.keys(counts).slice(0,3).map(function(sp){ return { label: sp+(counts[sp]>1?(' ×'+counts[sp]):'') }; });
  var sub=[it.water, (it.zones&&it.zones.length)?('Zone '+it.zones.join(', ')):''].filter(Boolean).join(' · ');
  var nSp=Object.keys(species).length;
  return { eyebrow:'on-fishing', kicker:'Day on the water', emoji:'🐟',
    title: cs.length+(cs.length===1?' fish, ':' fish, ')+nSp+(nSp===1?' species':' species'),
    subtitle:sub, chips:chips.slice(0,4), meta:fmtDayLabel(it.date) };
}
function shareCatch(id){
  var c=loadCatches().filter(function(x){ return x.id===id; })[0]; if(!c) return;
  if(!window.OnShare){ clToast('Sharing is not available'); return; }
  var item=catchShareItem(c);
  OnShare.share({ card:catchCard(item), item:item,
    text:'I caught a '+c.sp+(c.z?(' in Zone '+c.z):'')+' in Ontario.' })
    .then(function(r){ if(r==='fallback') clToast('Link copied, card saved'); });
}
function shareDay(key){
  var item=dayShareItem(key); if(!item.cs.length) return;
  if(!window.OnShare){ clToast('Sharing is not available'); return; }
  OnShare.share({ card:dayCard(item), item:item,
    text:'My day on the water in Ontario: '+item.cs.length+(item.cs.length===1?' fish.':' fish.') })
    .then(function(r){ if(r==='fallback') clToast('Link copied, card saved'); });
}

/* ---- receive view (#/shared/<data>) ---- */
function sharedTitle(it){ if(!it) return 'Shared'; if(it.t==='fish-day') return 'A day on the water'; return it.sp||'A catch'; }
function sharedBody(it){
  if(!it || (it.t!=='fish-catch' && it.t!=='fish-day'))
    return '<p class="empty">This shared link could not be opened. It may be from a newer version of the app.</p>';
  return '<div class="cl-recv"><div class="shared-card-wrap"><img id="shared-card-img" class="shared-card" alt="Shared '+esc(sharedTitle(it))+'"></div></div>'
    +'<button class="btn" id="recv-log" style="width:100%">Start your own catch log</button>'
    +'<button class="btn ghost" id="recv-explore" style="width:100%;margin-top:8px">Explore Ontario fishing zones</button>';
}
function wireShared(it){
  if(it && (it.t==='fish-catch'||it.t==='fish-day') && window.OnShare){
    var card=it.t==='fish-day'?dayCard(it):catchCard(it);
    OnShare.makeCard(card).then(function(b){ if(!b) return; var img=document.getElementById('shared-card-img'); if(img) img.src=URL.createObjectURL(b); });
  }
  var a=document.getElementById('recv-log'); if(a) a.onclick=openCatchlog;
  var e=document.getElementById('recv-explore'); if(e) e.onclick=function(){ goHomeNav(); };
}

/* ---- catch-log entry points (home card + More) and the ios header ---- */
(function(){
  var b=document.getElementById('clentry'); if(b) b.onclick=function(){ openCatchlog(); };
  var b2=document.getElementById('clentry-more'); if(b2) b2.onclick=function(){ openCatchlog(); };
  var ab=document.getElementById('acctbtn'); if(ab) ab.onclick=openAccount;
  var pb=document.getElementById('addcatchbtn'); if(pb) pb.onclick=function(){ openCatchlog(true); };
  var sb=document.getElementById('searchbtn'); if(sb) sb.onclick=function(){ showTab('guide'); showSearchView(); };
  renderAvatar();
})();

/* ---- shared floating tab bar ---- */
var fishLearnRendered=false;
function markTab(tab){
  var tb=document.getElementById('tabbar'); if(!tb) return;
  tb.querySelectorAll('.tab').forEach(function(b){
    var on=b.dataset.tab===tab;
    b.classList.toggle('active',on);
    if(on) b.setAttribute('aria-current','page'); else b.removeAttribute('aria-current');
  });
}
function exitMapTab(){ document.body.classList.remove('tab-map'); markTab('guide'); }
function setPanelView(view){
  var lh=document.getElementById('learnhome'), mh=document.getElementById('mainhome'),
      fh=document.getElementById('fishhome'), moreh=document.getElementById('morehome');
  if(typeof setAppbar==='function') setAppbar(true);
  if(lh) lh.hidden=true; if(moreh) moreh.hidden=true;
  if(view==='learn'){
    if(mh) mh.hidden=true; if(fh) fh.hidden=true; if(detailEl) detailEl.hidden=true;
    var rb=document.getElementById('gresults'); if(rb) rb.hidden=true;
    if(lh) lh.hidden=false;
    if(!fishLearnRendered){ renderFishLearn(); fishLearnRendered=true; }
  } else if(view==='more'){
    if(mh) mh.hidden=true; if(fh) fh.hidden=true; if(detailEl) detailEl.hidden=true;
    var rb2=document.getElementById('gresults'); if(rb2) rb2.hidden=true;
    if(moreh) moreh.hidden=false;
    if(typeof renderThemeRow==='function') renderThemeRow();
    if(typeof fillAboutStats==='function') fillAboutStats();
  } else {
    if(typeof restoreList==='function') restoreList();
  }
}
function showTab(tab){
  if(typeof closeModals==='function') closeModals();
  document.body.classList.toggle('tab-map', tab==='map');
  if(tab!=='guide' && typeof hideSearchView==='function') hideSearchView();
  setPanelView(tab==='learn' ? 'learn' : tab==='more' ? 'more' : 'home');
  markTab(tab);
  if(tab!=='map' && typeof panelEl!=='undefined' && panelEl) panelEl.scrollTop=0;
  if(typeof buzz==='function') buzz(6);
}
(function(){ var tb=document.getElementById('tabbar');
  if(tb) tb.addEventListener('click',function(e){ var b=e.target.closest&&e.target.closest('.tab'); if(b) showTab(b.dataset.tab); }); })();
/* Mobile opens on the map (fishing's home). On a laptop the map is always in the
   split beside the panel, so there is no Map tab; land on Guide instead. */
(function(){
  var desktop = window.matchMedia && window.matchMedia('(min-width:900px)').matches;
  if(desktop){ showTab('guide'); }
  else { document.body.classList.add('tab-map'); }
})();

function renderFishLearn(){
  var el=document.getElementById('fishLearnBody'); if(!el) return;
  var A=[
    {t:'Before you fish', b:'You need an Outdoors Card and a valid licence to fish in Ontario, and the rules change by zone and by species. This app is a quick check, not the official word, so confirm the seasons and limits against the official summary before you keep anything.'},
    {t:'Handling and releasing fish', b:'If you are letting a fish go, give it the best chance. Wet your hands first, keep it in the water as much as you can, and support its belly. Pinch the barb or use barbless hooks, and back the hook out gently. If it is hooked deep, cut the line rather than digging. Do not hold a fish by the gills, and get it back in the water quickly, facing into the current until it swims off on its own.'},
    {t:'Protect the water', b:'Invasive species like zebra mussels and spiny water flea move from lake to lake on boats and gear. Clean, drain, and dry everything between waters. Never move live fish or bait from one lake to another, and put leftover bait in the trash, not the water.'},
    {t:'Is it safe to eat?', b:'Ontario publishes eating guidelines because some fish carry mercury or other contaminants, more so in bigger, older fish. Check the province Guide to Eating Ontario Fish for your lake and species, and go easy on large predators like walleye and pike if you eat fish often.'},
    {t:'Cold water and weather', b:'Cold water is the real danger, even in summer. Wear a lifejacket, tell someone your plan, and watch the sky. If a storm builds, get off the water and away from tall lone trees. A sudden dunk in cold water saps your strength fast.'},
    {t:'Report a problem', b:'Seeing pollution, a fishing violation, or someone moving live fish between lakes? Report it to the ministry TIPS-MNR line at 1-877-847-7667.'}
  ];
  el.innerHTML='<h2 class="ios-section-title">Learn</h2>'
    +'<div class="group" style="margin-top:0"><div class="group-header">Learn and safety</div><div class="ios-group">'
    +A.map(function(a){ return '<details><summary class="ios-row ios-row--plain">'
      +'<span class="ios-row-body"><span class="ios-row-title">'+a.t+'</span></span>'
      +'<span class="ios-chevron"><svg aria-hidden="true"><use href="assets/icons.svg#chevron-right"/></svg></span></summary>'
      +'<div class="cell-detail"><p>'+a.b+'</p></div></details>'; }).join('')
    +'</div></div>';
}

/* ---------------- themes, borrowed whole from Site Journal ----------------
   The palette math below is ported from Site Journal so an unlocked theme
   looks identical in both apps. Unlocks live in shared storage. */
function mixhex(a,b,t){ var A=parseInt(a.slice(1),16),B=parseInt(b.slice(1),16);
  var r=Math.round(((A>>16)&255)*(1-t)+((B>>16)&255)*t), g=Math.round(((A>>8)&255)*(1-t)+((B>>8)&255)*t), c=Math.round((A&255)*(1-t)+(B&255)*t);
  return '#'+((1<<24)|(r<<16)|(g<<8)|c).toString(16).slice(1).toUpperCase(); }
function buildVars(t){ var P=t.paper,I=t.ink,F=t.primary,dark=!!t.dark;
  var amber=mixhex(dark?'#F5CE4A':'#F2C728', F, .15);
  var v={'--paper':P,'--card':dark?mixhex(P,'#FFFFFF',.05):'#FFFFFF','--ink':I,
    '--forest':F,'--forest-2':mixhex(F,'#FFFFFF',.16),'--forest-press':mixhex(F,'#000000',.22),
    '--green-tint':mixhex(F,P,dark?.86:.88),'--green-tint-2':mixhex(F,P,dark?.74:.78),
    '--moss':mixhex(I,P,dark?.35:.30),
    '--mist':mixhex(I,P,.90),'--mist-2':mixhex(I,P,.78),'--line':mixhex(I,P,.85),
    '--amber':amber,'--amber-soft':mixhex(amber,P,.82)};
  if(dark){ v['--shadow-sm']='0 1px 2px rgba(0,0,0,.40)'; v['--shadow']='0 4px 16px rgba(0,0,0,.45)'; v['--shadow-btn']='0 3px 12px rgba(0,0,0,.5)'; }
  else { v['--shadow-sm']='0 1px 2px rgba(15,31,23,.06)'; v['--shadow']='0 2px 12px rgba(15,31,23,.08)'; v['--shadow-btn']='0 3px 10px rgba(0,0,0,.22)'; }
  return v; }
function renderThemeRow(){
  const el=document.getElementById('themeRow'); if(!el) return;
  const cur=fishAppearance();
  const opts=[['auto','Auto'],['light','Light'],['dark','Dark']];
  el.innerHTML=opts.map(o=>`<button type="button" class="seg-opt${o[0]===cur?' on':''}" data-app="${o[0]}" aria-pressed="${o[0]===cur?'true':'false'}">${o[1]}</button>`).join('');
  el.querySelectorAll('.seg-opt').forEach(b=>{ b.onclick=()=>setAppearance(b.dataset.app); });
}
function setAppearance(mode){
  try{
    if(mode==='auto'){ localStorage.removeItem('onfish-appearance'); document.documentElement.removeAttribute('data-theme'); }
    else{ localStorage.setItem('onfish-appearance',mode); document.documentElement.setAttribute('data-theme',mode); }
  }catch(e){}
  const nowDark = mode==='dark' || (mode==='auto' && fishPrefersDark());
  if(nowDark!==THEME_DARK){ location.reload(); return; }  /* the map tiles must swap */
  renderThemeRow();
}
document.getElementById('verbtn').onclick=()=>openModal(versionsEl);
const logo=document.getElementById('logobtn');
logo.onclick=()=>showTab('guide');
logo.onkeydown=e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); showTab('guide'); } };
backdrop.onclick=closeModals;
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModals(); });
// swipe down to close, yielding to the sheet's own scroll
[versionsEl,catchSheetEl,catchDetailSheetEl].filter(Boolean).forEach(sh=>{
  let sy=null;
  sh.addEventListener('touchstart',e=>{ sy = sh.scrollTop<=0 ? e.touches[0].clientY : null; },{passive:true});
  sh.addEventListener('touchmove',e=>{ if(sy!=null && e.touches[0].clientY-sy>70){ closeModals(); sy=null; } },{passive:true});
});

/* ---------------- deep links ---------------- */
if(window.OnShare) OnShare.config({ app:'on-fishing', base:'https://katsuma0.github.io/on-fishing/', accent:'#007AFF' });
function fromHash(){
  const h=location.hash||'';
  const s=h.match(/^#\/shared\/(.+)$/);
  if(s){ const it=window.OnShare?OnShare.decode(s[1]):null; replaceRoot({type:'shared',item:it}); return; }
  const m=h.match(/zone=(\d+)/); if(m) selectZone(Number(m[1]));
}
window.addEventListener('hashchange',fromHash);
fromHash();

/* ---------------- follow the system appearance when set to Auto ---------------- */
if(window.matchMedia){
  try{ window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{
    if(fishAppearance()==='auto') location.reload();   /* map tiles must swap */
  }); }catch(_){}
}

/* ---------------- offline ---------------- */
if('serviceWorker' in navigator && location.protocol.startsWith('http')){
  window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
}
