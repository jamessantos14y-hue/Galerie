const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const loginScreen = $("#loginScreen");
const app = $("#app");
const loginForm = $("#loginForm");
const demoLogin = $("#demoLogin");
const feed = $("#feed");
const toast = $("#toast");

const artists = [
  {
    name: "Marina Costa",
    username: "@marinacosta",
    category: "Pintura contemporânea",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150"
  },
  {
    name: "Caio Nunes",
    username: "@caionunes",
    category: "Fotografia urbana",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
  },
  {
    name: "Beatriz Melo",
    username: "@bia.melo",
    category: "Ilustração",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
  },
  {
    name: "Lucas Freire",
    username: "@lucasfreire",
    category: "Arte digital",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  }
];

const artworks = [
  {
    id: 1,
    title: "Entre Sol e Terra",
    artist: "Marina Costa",
    avatar: artists[0].avatar,
    category: "Pintura",
    technique: "Acrílica sobre tela",
    price: 780,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900",
    description: "Uma obra inspirada nas tonalidades, memórias e paisagens do interior brasileiro."
  },
  {
    id: 2,
    title: "Guardião",
    artist: "Beatriz Melo",
    avatar: artists[2].avatar,
    category: "Ilustração",
    technique: "Ilustração digital",
    price: 160,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=900",
    description: "Estudo visual inspirado em fantasia e elementos da cultura brasileira."
  },
  {
    id: 3,
    title: "Fragmentos I",
    artist: "Lucas Freire",
    avatar: artists[3].avatar,
    category: "Arte digital",
    technique: "Arte digital",
    price: 260,
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=900",
    description: "Uma reflexão visual sobre memória, tempo e a forma como lembranças mudam."
  },
  {
    id: 4,
    title: "Caminhos III",
    artist: "Caio Nunes",
    avatar: artists[1].avatar,
    category: "Fotografia",
    technique: "Fotografia artística",
    price: 340,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900",
    description: "Parte da série Caminhos, explorando paisagem, silêncio e deslocamento."
  },
  {
    id: 5,
    title: "Coleção Terra",
    artist: "Ana Clara",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    category: "Artesanato",
    technique: "Cerâmica artesanal",
    price: 120,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=900",
    description: "Peças produzidas manualmente; pequenas variações tornam cada trabalho único."
  },
  {
    id: 6,
    title: "Estudo Cromático",
    artist: "Sofia Alves",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100",
    category: "Pintura",
    technique: "Óleo sobre tela",
    price: 520,
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=900",
    description: "Um estudo focado na relação entre luz, textura e uma paleta de cores limitada."
  }
];

const posts = [
  {
    name: "Marina Costa",
    username: "@marinacosta",
    avatar: artists[0].avatar,
    text: 'Finalizei hoje "Entre Sol e Terra". Essa obra nasceu das minhas lembranças do interior.',
    category: "Pintura",
    image: artworks[0].image,
    likes: 482,
    comments: 38,
    reposts: 41,
    artwork: artworks[0],
    verified: true
  },
  {
    name: "Caio Nunes",
    username: "@caionunes",
    avatar: artists[1].avatar,
    text: "Tenho tentado registrar pequenos momentos da cidade que normalmente passam despercebidos.",
    category: "Fotografia",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900",
    likes: 231,
    comments: 18,
    reposts: 12,
    artwork: null,
    verified: false
  },
  {
    name: "Beatriz Melo",
    username: "@bia.melo",
    avatar: artists[2].avatar,
    text: "Estudo de personagem para um projeto que mistura fantasia e cultura brasileira.",
    category: "Ilustração",
    image: artworks[1].image,
    likes: 823,
    comments: 76,
    reposts: 101,
    artwork: artworks[1],
    verified: true
  },
  {
    name: "Lucas Freire",
    username: "@lucasfreire",
    avatar: artists[3].avatar,
    text: "Comecei essa série tentando representar como nossas lembranças mudam com o tempo.",
    category: "Arte digital",
    image: artworks[2].image,
    likes: 192,
    comments: 21,
    reposts: 14,
    artwork: artworks[2],
    verified: false
  }
];

const notifications = [
  {type:"interaction", icon:"heart", color:"like", avatar:artists[0].avatar, text:"<strong>Marina Costa</strong> curtiu sua publicação.", time:"há 4 minutos", unread:true},
  {type:"sale", icon:"bag-shopping", color:"sale", avatar:artists[1].avatar, text:"<strong>Caio Nunes</strong> demonstrou interesse em uma obra sua.", time:"há 18 minutos", unread:true},
  {type:"interaction", icon:"comment", color:"comment", avatar:artists[2].avatar, text:"<strong>Beatriz Melo</strong> comentou: “As cores ficaram incríveis!”", time:"há 1 hora", unread:false},
  {type:"interaction", icon:"user-plus", color:"follow", avatar:artists[3].avatar, text:"<strong>Lucas Freire</strong> começou a seguir você.", time:"há 3 horas", unread:false}
];

const conversations = [
  {
    id:1,
    name:"Marina Costa",
    avatar:artists[0].avatar,
    last:"Ela ainda está disponível para venda.",
    time:"08:21",
    messages:[
      {mine:false,text:"Oi! Vi que você salvou minha obra Entre Sol e Terra."},
      {mine:true,text:"Oi! Sim, achei muito bonita. As cores ficaram incríveis."},
      {mine:false,text:"Obrigada! Ela ainda está disponível para venda."},
      {mine:true,text:"Queria saber um pouco mais sobre o processo."},
      {mine:false,text:"Claro! Ela levou cerca de três semanas para ficar pronta."}
    ]
  },
  {
    id:2,
    name:"Beatriz Melo",
    avatar:artists[2].avatar,
    last:"Posso te mandar outros estudos.",
    time:"Ontem",
    messages:[
      {mine:false,text:"Oi Luana! Vi seu comentário no meu trabalho."},
      {mine:true,text:"Eu adorei a direção visual."},
      {mine:false,text:"Obrigada! Posso te mandar outros estudos."}
    ]
  },
  {
    id:3,
    name:"Caio Nunes",
    avatar:artists[1].avatar,
    last:"Vamos conversar depois.",
    time:"Seg",
    messages:[
      {mine:false,text:"Vi suas pinturas. Gostei muito da última série."},
      {mine:true,text:"Valeu! Também acompanho seu trabalho."},
      {mine:false,text:"Vamos conversar depois."}
    ]
  }
];

let selectedCategory = "Todos";
let marketCategory = "Todos";
let currentFeed = "forYou";
let currentConversation = conversations[0];
let imageData = "";
let saleActive = false;
let savedArtworkIds = new Set([1, 4]);

function enterApp(){
  loginScreen.classList.add("hidden");
  app.classList.remove("hidden");
  renderAll();
  window.scrollTo(0,0);
}

function renderAll(){
  renderFeed();
  renderMarket();
  renderExploreArtists();
  renderNotifications("all");
  renderConversations();
  renderSaved();
  renderProfile("posts");
}

loginForm.addEventListener("submit", e => {e.preventDefault(); enterApp();});
demoLogin.addEventListener("click", enterApp);

$("#showPassword").addEventListener("click", function(){
  const input = $("#password");
  const showing = input.type === "text";
  input.type = showing ? "password" : "text";
  this.innerHTML = showing ? '<i class="fa-regular fa-eye"></i>' : '<i class="fa-regular fa-eye-slash"></i>';
});

function openPage(page){
  $$(".page").forEach(el => el.classList.remove("active-page"));
  const target = $(`#page-${page}`);
  if(target) target.classList.add("active-page");

  $$(".nav-item").forEach(btn => btn.classList.toggle("active", btn.dataset.page === page));
  $$(".mobile-nav-button").forEach(btn => btn.classList.toggle("active", btn.dataset.page === page));

  window.scrollTo({top:0,behavior:"smooth"});
}

$$("[data-page]").forEach(btn => btn.addEventListener("click", () => openPage(btn.dataset.page)));

const themeToggle = $("#themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  themeToggle.innerHTML = dark
    ? '<i class="fa-regular fa-sun"></i><span>Tema claro</span>'
    : '<i class="fa-regular fa-moon"></i><span>Tema escuro</span>';
  localStorage.setItem("galerie-theme", dark ? "dark" : "light");
});

if(localStorage.getItem("galerie-theme") === "dark"){
  document.body.classList.add("dark");
  themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i><span>Tema claro</span>';
}

$$(".feed-tab").forEach(btn => btn.addEventListener("click", function(){
  $$(".feed-tab").forEach(item => item.classList.remove("active"));
  this.classList.add("active");
  currentFeed = this.dataset.feed;
  renderFeed();
}));

$$(".category-chip").forEach(btn => btn.addEventListener("click", function(){
  $$(".category-chip").forEach(item => item.classList.remove("active"));
  this.classList.add("active");
  selectedCategory = this.dataset.category;
  renderFeed();
}));

function renderFeed(){
  let filtered = [...posts];
  if(currentFeed === "following") filtered = filtered.filter((_, i) => i % 2 === 0);
  if(selectedCategory !== "Todos") filtered = filtered.filter(post => post.category === selectedCategory);

  const repeated = [...filtered, ...filtered, ...filtered];

  feed.innerHTML = repeated.map((post,index) => {
    const sale = post.artwork ? `
      <div class="post-sale">
        <div>
          <span>OBRA DISPONÍVEL</span>
          <strong>${escapeHTML(post.artwork.title)}</strong>
          <small>${formatPrice(post.artwork.price)}</small>
        </div>
        <button class="open-art" data-artwork="${post.artwork.id}">Ver obra</button>
      </div>` : "";

    return `
      <article class="post">
        <img class="post-avatar" src="${post.avatar}" alt="">
        <div class="post-content">
          <div class="post-user">
            <strong>${escapeHTML(post.name)}</strong>
            ${post.verified ? '<i class="fa-solid fa-circle-check verified"></i>' : ""}
            <span>${escapeHTML(post.username)}</span>
            <span>· ${index + 1}h</span>
          </div>

          <p class="post-text">${escapeHTML(post.text)}</p>
          <span class="post-category">${escapeHTML(post.category)}</span>

          <div class="post-image">
            <img src="${post.image}" alt="Publicação de ${escapeHTML(post.name)}" loading="lazy">
            ${sale}
          </div>

          <div class="post-actions">
            <button class="comment-post"><i class="fa-regular fa-comment"></i>${post.comments}</button>
            <button class="repost-post"><i class="fa-solid fa-retweet"></i>${post.reposts}</button>
            <button class="like-post"><i class="fa-regular fa-heart"></i><span>${post.likes}</span></button>
            <button class="save-post"><i class="fa-regular fa-bookmark"></i></button>
            <button class="share-post"><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
          </div>
        </div>
      </article>`;
  }).join("");

  bindPostButtons();
}

function bindPostButtons(){
  $$(".like-post").forEach(button => button.addEventListener("click", function(){
    const liked = this.classList.toggle("liked");
    const number = $("span", this);
    number.textContent = Number(number.textContent) + (liked ? 1 : -1);
    $("i", this).className = liked ? "fa-solid fa-heart" : "fa-regular fa-heart";
  }));

  $$(".save-post").forEach(button => button.addEventListener("click", function(){
    const saved = this.classList.toggle("saved");
    $("i", this).className = saved ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark";
    showToast(saved ? "Publicação salva no seu arquivo." : "Publicação removida dos salvos.");
  }));

  $$(".repost-post").forEach(button => button.addEventListener("click", () => showToast("Publicação republicada no seu perfil.")));
  $$(".share-post").forEach(button => button.addEventListener("click", () => showToast("Link da publicação copiado.")));
  $$(".comment-post").forEach(button => button.addEventListener("click", () => showToast("Comentários simulados no MVP.")));

  $$(".open-art").forEach(button => button.addEventListener("click", () => openArtwork(Number(button.dataset.artwork))));
}

const saleToggle = $("#saleToggle");
const saleFields = $("#saleFields");
const postImage = $("#postImage");
const imagePreview = $("#imagePreview");

saleToggle.addEventListener("click", function(){
  saleActive = !saleActive;
  this.classList.toggle("active", saleActive);
  saleFields.classList.toggle("hidden", !saleActive);
});

postImage.addEventListener("change", event => {
  const file = event.target.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    imageData = e.target.result;
    imagePreview.innerHTML = `<img src="${imageData}" alt="Prévia">`;
    imagePreview.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
});

$("#createPost").addEventListener("click", () => {
  const text = $("#postText").value.trim();

  if(!text && !imageData){
    showToast("Adicione um texto ou uma imagem.");
    return;
  }

  let artwork = null;

  if(saleActive){
    artwork = {
      id: Date.now(),
      title: $("#artName").value.trim() || "Nova obra",
      artist: "Luana Reis",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
      category: "Arte digital",
      technique: "Obra autoral",
      price: Number($("#artPrice").value) || 150,
      image: imageData || "https://images.unsplash.com/photo-1549490349-8643362247b5?w=900",
      description: text || "Nova obra autoral."
    };
    artworks.unshift(artwork);
  }

  posts.unshift({
    name:"Luana Reis",
    username:"@luana.art",
    avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    text:text || "Nova obra publicada.",
    category:artwork ? "Arte digital" : "Processo criativo",
    image:imageData || "https://images.unsplash.com/photo-1549490349-8643362247b5?w=900",
    likes:0,
    comments:0,
    reposts:0,
    artwork,
    verified:false
  });

  resetComposer();
  selectedCategory = "Todos";
  $$(".category-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.category === "Todos"));
  renderFeed();
  renderMarket();
  showToast("Sua publicação entrou em circulação.");
});

function resetComposer(){
  $("#postText").value = "";
  $("#artName").value = "";
  $("#artPrice").value = "";
  postImage.value = "";
  imageData = "";
  imagePreview.innerHTML = "";
  imagePreview.classList.add("hidden");
  saleActive = false;
  saleToggle.classList.remove("active");
  saleFields.classList.add("hidden");
}

$("#publishButton").addEventListener("click", () => {
  openPage("home");
  setTimeout(() => $("#postText").focus(), 200);
});

function renderExploreArtists(){
  $("#exploreArtists").innerHTML = artists.map(artist => `
    <article class="artist-card">
      <img src="${artist.avatar}" alt="">
      <div class="artist-card-info">
        <strong>${escapeHTML(artist.name)}</strong>
        <span>${escapeHTML(artist.username)}</span>
        <span>${escapeHTML(artist.category)}</span>
      </div>
      <button class="explore-follow">Seguir</button>
    </article>`).join("");

  $$(".explore-follow").forEach(btn => btn.addEventListener("click", function(){
    const following = this.classList.toggle("following");
    this.textContent = following ? "Seguindo" : "Seguir";
  }));
}

$$(".explore-card").forEach(card => card.addEventListener("click", () => {
  const category = card.dataset.exploreCategory;
  openPage("home");
  selectedCategory = ["Pintura","Fotografia","Ilustração","Arte digital"].includes(category) ? category : "Todos";
  $$(".category-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.category === selectedCategory));
  renderFeed();
}));

$("#exploreSearch").addEventListener("input", function(){
  const term = this.value.trim().toLowerCase();
  $$(".artist-card").forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(term) ? "flex" : "none";
  });
});

function renderMarket(){
  let list = [...artworks];
  const search = $("#marketSearch").value.toLowerCase().trim();
  const sort = $("#marketSort").value;

  if(marketCategory !== "Todos") list = list.filter(art => art.category === marketCategory);
  if(search) list = list.filter(art => `${art.title} ${art.artist} ${art.category}`.toLowerCase().includes(search));

  if(sort === "low") list.sort((a,b) => a.price - b.price);
  if(sort === "high") list.sort((a,b) => b.price - a.price);

  $("#marketCount").textContent = `${list.length} obras`;

  $("#marketGrid").innerHTML = list.map(createMarketCard).join("");
  bindMarketButtons();
}

function createMarketCard(artwork){
  const saved = savedArtworkIds.has(artwork.id);
  return `
    <article class="market-card">
      <div class="market-image">
        <img src="${artwork.image}" alt="${escapeHTML(artwork.title)}">
        <span class="market-category-label">${escapeHTML(artwork.category)}</span>
        <button class="market-save ${saved ? "saved" : ""}" data-save-art="${artwork.id}">
          <i class="${saved ? "fa-solid" : "fa-regular"} fa-bookmark"></i>
        </button>
      </div>

      <div class="market-card-content">
        <div class="market-seller">
          <img src="${artwork.avatar}" alt="">
          <span>${escapeHTML(artwork.artist)}</span>
        </div>

        <h3>${escapeHTML(artwork.title)}</h3>
        <p class="market-card-description">${escapeHTML(artwork.technique)}</p>

        <div class="market-card-bottom">
          <div class="market-price">
            <span>Preço</span>
            <strong>${formatPrice(artwork.price)}</strong>
          </div>
          <button class="open-market-art" data-id="${artwork.id}">Ver obra</button>
        </div>
      </div>
    </article>`;
}

function bindMarketButtons(){
  $$(".open-market-art").forEach(btn => btn.addEventListener("click", () => openArtwork(Number(btn.dataset.id))));

  $$("[data-save-art]").forEach(btn => btn.addEventListener("click", function(){
    const id = Number(this.dataset.saveArt);
    if(savedArtworkIds.has(id)){
      savedArtworkIds.delete(id);
      this.classList.remove("saved");
      $("i",this).className = "fa-regular fa-bookmark";
      showToast("Obra removida da coleção.");
    }else{
      savedArtworkIds.add(id);
      this.classList.add("saved");
      $("i",this).className = "fa-solid fa-bookmark";
      showToast("Obra adicionada à sua coleção.");
    }
    renderSaved();
  }));
}

$$(".market-chip").forEach(btn => btn.addEventListener("click", function(){
  $$(".market-chip").forEach(item => item.classList.remove("active"));
  this.classList.add("active");
  marketCategory = this.dataset.marketCategory;
  renderMarket();
}));

$("#marketSearch").addEventListener("input", renderMarket);
$("#marketSort").addEventListener("change", renderMarket);

$("#sellArtwork").addEventListener("click", () => {
  openPage("home");
  saleActive = true;
  saleToggle.classList.add("active");
  saleFields.classList.remove("hidden");
  setTimeout(() => $("#postText").focus(), 200);
});

$("#heroExplore").addEventListener("click", () => $("#marketGrid").scrollIntoView({behavior:"smooth"}));

const artModal = $("#artModal");

function openArtwork(id){
  const artwork = artworks.find(item => item.id === id);
  if(!artwork) return;

  $("#modalArtworkImage").src = artwork.image;
  $("#modalArtworkCategory").textContent = artwork.category;
  $("#modalArtworkTitle").textContent = artwork.title;
  $("#modalSellerAvatar").src = artwork.avatar;
  $("#modalSeller").textContent = artwork.artist;
  $("#modalArtworkDescription").textContent = artwork.description;
  $("#modalTechnique").textContent = artwork.technique;
  $("#modalArtworkPrice").textContent = formatPrice(artwork.price);

  artModal.classList.remove("hidden");
}

$("#closeArtModal").addEventListener("click", () => artModal.classList.add("hidden"));
artModal.addEventListener("click", e => {if(e.target === artModal) artModal.classList.add("hidden");});
$("#buyArtworkButton").addEventListener("click", () => {
  artModal.classList.add("hidden");
  showToast("Compra simulada. O checkout entraria aqui na versão real.");
});

$$(".select-plan").forEach(button => button.addEventListener("click", function(){
  const card = this.closest(".boost-plan");
  $$(".boost-plan").forEach(plan => {
    plan.classList.remove("selected");
    $(".select-plan",plan).textContent = "Escolher plano";
  });
  card.classList.add("selected");
  this.textContent = "Plano selecionado";
  showToast(`${card.dataset.plan} selecionado — R$ ${Number(card.dataset.price).toFixed(2).replace(".",",")}`);
}));

function renderNotifications(filter){
  const list = filter === "all" ? notifications : notifications.filter(item => item.type === filter);
  $("#notificationList").innerHTML = list.map(item => `
    <article class="notification-item ${item.unread ? "unread" : ""}">
      <div class="notification-type ${item.color}"><i class="fa-solid fa-${item.icon}"></i></div>
      <img src="${item.avatar}" alt="">
      <div><p>${item.text}</p><span>${item.time}</span></div>
    </article>`).join("");
}

$$(".notification-tab").forEach(btn => btn.addEventListener("click", function(){
  $$(".notification-tab").forEach(item => item.classList.remove("active"));
  this.classList.add("active");
  renderNotifications(this.dataset.notificationFilter);
}));

function renderConversations(){
  const term = ($("#conversationSearch")?.value || "").toLowerCase().trim();
  const list = conversations.filter(c => c.name.toLowerCase().includes(term));

  $("#conversationList").innerHTML = list.map(conversation => `
    <div class="conversation ${conversation.id === currentConversation.id ? "active" : ""}" data-id="${conversation.id}">
      <img src="${conversation.avatar}" alt="">
      <div class="conversation-info">
        <div class="conversation-top"><strong>${escapeHTML(conversation.name)}</strong><time>${conversation.time}</time></div>
        <p>${escapeHTML(conversation.last)}</p>
      </div>
    </div>`).join("");

  $$(".conversation").forEach(item => item.addEventListener("click", () => {
    currentConversation = conversations.find(c => c.id === Number(item.dataset.id));
    renderConversations();
    renderChat();
  }));

  renderChat();
}

$("#conversationSearch").addEventListener("input", renderConversations);

function renderChat(){
  $("#chatAvatar").src = currentConversation.avatar;
  $("#chatName").textContent = currentConversation.name;

  const container = $("#chatMessages");
  container.innerHTML = `
    <div class="chat-day">Hoje</div>
    ${currentConversation.messages.map(message => `
      <div class="message-row ${message.mine ? "mine" : ""}">
        <div class="message">
          ${escapeHTML(message.text)}
          <small>${message.mine ? "Você · agora" : escapeHTML(currentConversation.name)}</small>
        </div>
      </div>`).join("")}
  `;
  container.scrollTop = container.scrollHeight;
}

function sendMessage(){
  const input = $("#chatInput");
  const value = input.value.trim();
  if(!value) return;

  currentConversation.messages.push({mine:true,text:value});
  currentConversation.last = value;
  currentConversation.time = "agora";
  input.value = "";

  renderConversations();
  showToast("Mensagem adicionada localmente ao protótipo.");
}

$("#sendChatMessage").addEventListener("click", sendMessage);
$("#chatInput").addEventListener("keydown", e => {if(e.key === "Enter") sendMessage();});

function renderSaved(){
  const list = artworks.filter(art => savedArtworkIds.has(art.id));
  $("#savedGrid").innerHTML = list.length
    ? list.map(createMarketCard).join("")
    : `<div class="profile-about"><h3>Nenhuma obra salva</h3><p>Salve obras no Mercado para montar sua coleção pessoal.</p></div>`;
  bindMarketButtons();
}

function renderProfile(tab){
  const content = $("#profileContent");

  if(tab === "about"){
    content.innerHTML = `
      <div class="profile-about">
        <h3>Sobre Luana</h3>
        <p>Pesquisa memória, natureza e identidade brasileira por meio de ilustração, pintura e processos híbridos. Disponível para encomendas e colaborações.</p>
      </div>`;
    return;
  }

  if(tab === "works"){
    content.innerHTML = `<div class="market-grid">${artworks.slice(0,4).map(createMarketCard).join("")}</div>`;
    bindMarketButtons();
    return;
  }

  const images = [
    "https://images.unsplash.com/photo-1549490349-8643362247b5?w=600",
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600",
    "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600",
    "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600"
  ];

  content.innerHTML = `<div class="profile-gallery">${images.map(src => `<img src="${src}" alt="">`).join("")}</div>`;
}

$$(".profile-tab").forEach(btn => btn.addEventListener("click", function(){
  $$(".profile-tab").forEach(item => item.classList.remove("active"));
  this.classList.add("active");
  renderProfile(this.dataset.profileTab);
}));

$("#profileBoostButton").addEventListener("click", () => openPage("boost"));

$$(".follow-btn").forEach(button => button.addEventListener("click", function(){
  const following = this.classList.toggle("following");
  this.textContent = following ? "Seguindo" : "Seguir";
}));

$$(".trend").forEach(button => button.addEventListener("click", () => {
  openPage("home");
  showToast(`Explorando #${button.dataset.trend}`);
}));

$("#globalSearch").addEventListener("keydown", e => {
  if(e.key !== "Enter") return;
  const term = e.currentTarget.value.trim();
  if(!term) return;
  openPage("explore");
  $("#exploreSearch").value = term;
  $("#exploreSearch").dispatchEvent(new Event("input"));
});

function formatPrice(value){
  return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(value);
}

function escapeHTML(text){
  return String(text)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

let toastTimeout;

function showToast(message){
  $("span",toast).textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"),2600);
}
