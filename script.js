// Sample writings data - you can add more writings here
const writings = [
    {
        id: 1,
        title: "The Journey Begins",
        category: "Story",
        excerpt: "Every great adventure starts with a single step. Today marks the beginning of an incredible journey...",
        content: "Every great adventure starts with a single step. Today marks the beginning of an incredible journey. The sun was rising over the mountains as I stood at the edge of the path, uncertainty mixed with excitement flooding through my veins. I had spent months planning this moment, dreaming about what lay ahead.\n\nThe road before me seemed endless, winding through forests and valleys I had only seen in pictures. But I was ready. I had prepared myself mentally, physically, and emotionally for what was to come. This wasn't just a trip; it was a transformation.\n\nAs I took that first step, I realized that the destination wasn't nearly as important as the person I would become along the way. Every challenge, every setback, every moment of doubt would shape me into someone stronger.",
        date: "August 20, 2026"
    },
    {
        id: 2,
        title: "Midnight Reflections",
        category: "Poetry",
        excerpt: "In the silence of the midnight hour, thoughts cascade like gentle waves upon the shore...",
        content: "In the silence of the midnight hour,\nThoughts cascade like gentle waves upon the shore,\nEach one carrying memories of yesterday,\nDreams of tomorrow, and the present's gentle sway.\n\nThe moonlight filters through the window pane,\nCasting shadows that dance and play,\nWhispering secrets of the night,\nPromising that all will be alright.\n\nI sit here in this solitude,\nWith only my thoughts for company,\nReflecting on the paths I've walked,\nThe decisions that shaped who I am.\n\nIn this moment, everything becomes clear,\nThe noise of the day fades away,\nAnd I find peace in the midnight air,\nA sanctuary where my soul can lay.",
        date: "August 15, 2026"
    },
    {
        id: 3,
        title: "Dreams of Tomorrow",
        category: "Article",
        excerpt: "What does the future hold for us? In this piece, I explore the power of dreams and aspirations...",
        content: "What does the future hold for us? This is a question that has haunted humanity since the beginning of time. We are constantly dreaming, constantly imagining what our lives could become. But what makes some dreams come true while others fade away?\n\nThe answer lies not in the dreams themselves, but in the dreamer. Success is not about having the biggest dreams; it's about having the persistence to pursue them. It's about waking up every day with purpose and determination, even when the path seems impossible.\n\nOur dreams are not just fantasies – they are blueprints for our futures. They guide us, inspire us, and give us reasons to keep moving forward. The world needs dreamers, people who dare to imagine a better tomorrow and work tirelessly to make it a reality.\n\nSo I ask you: What are your dreams? What is that one thing that makes your heart race and your spirit soar? Don't let it remain just a dream. Take action today. Start small, but start. Because the future belongs to those who dare to dream and have the courage to pursue those dreams.",
        date: "August 10, 2026"
    },
    {
        id: 4,
        title: "Lost in Translation",
        category: "Story",
        excerpt: "A chance encounter in a foreign land leads to an unexpected friendship and life-changing lessons...",
        content: "I was sitting in a small café in a city I couldn't pronounce, sipping coffee I didn't order, when she walked in. She had bright eyes and a smile that seemed to communicate more than any words ever could.\n\nWe didn't speak the same language. My attempts at the local language were met with amused nods, and her English was limited to \"hello\" and \"goodbye.\" Yet somehow, we spent the entire afternoon together, communicating through gestures, drawings on napkins, and the universal language of laughter.\n\nShe showed me places tourists never go – hidden alleyways with street art, local markets bursting with colors and sounds, small restaurants where families gathered to share meals. Through her eyes, I saw a side of the city that no guidebook could ever capture.\n\nBefore we parted ways, she gave me a small handwritten note. It took me hours to translate it, but when I finally understood, tears rolled down my cheeks. It simply said: 'Thank you for reminding me to see my home through the eyes of wonder.'\n\nThat day, I learned that connection transcends language, and the most meaningful conversations often happen in the spaces between words.",
        date: "August 5, 2026"
    },
    {
        id: 5,
        title: "The Art of Letting Go",
        category: "Article",
        excerpt: "Sometimes the strongest thing we can do is release what we're holding onto so tightly...",
        content: "We live in a culture that celebrates holding on – holding on to achievements, relationships, possessions, and even grudges. But what if the real strength lies in knowing when and how to let go?\n\nLetting go is not about giving up or admitting defeat. It's about recognizing when something is no longer serving us and having the courage to release it. It's about understanding that our hands can only hold so much, and in order to grasp something new and beautiful, we must first open our fingers and let the old fall away.\n\nI used to hold onto everything – old friendships that had faded, mistakes I couldn't undo, dreams that were never meant to be. The weight of it all was suffocating. It wasn't until I learned to let go that I truly began to live.\n\nLetting go doesn't mean you didn't care. It doesn't mean those experiences weren't valuable. It simply means you're choosing to move forward, to grow, to become the best version of yourself. Sometimes, the most powerful thing you can say is: 'I release this, and I trust that what comes next will be even better.'",
        date: "July 28, 2026"
    },
    {
        id: 6,
        title: "Whispers of the Soul",
        category: "Poetry",
        excerpt: "Deep within, there's a voice that only you can hear, calling you toward your truth...",
        content: "Listen closely to the whispers of your soul,\nThe soft voice that speaks in silence and solitude,\nFor it holds the answers you seek,\nThe truths that set you free.\n\nIn a world of noise and chaos,\nWhere everyone tells you who to be,\nThere's a sacred space within,\nWhere your authentic self resides.\n\nThe soul doesn't shout or demand attention,\nIt whispers gently, persistently,\nGuiding you toward your purpose,\nYour unique path in this vast universe.\n\nWhen you quiet the external voices,\nAnd tune into that inner frequency,\nYou discover a power you never knew you had,\nThe power to create your reality.\n\nSo pause today, be still,\nListen to the whispers of your soul,\nAnd remember: you are exactly where you need to be,\nUnfolding into the person you were meant to become.",
        date: "July 20, 2026"
    }
];

// Load writings on page load
document.addEventListener('DOMContentLoaded', function() {
    displayWritings();
    updateWritingCount();
});

// Display all writings
function displayWritings() {
    const writingsGrid = document.getElementById('writings-grid');
    writingsGrid.innerHTML = '';

    writings.forEach(writing => {
        const card = document.createElement('div');
        card.className = 'writing-card';
        card.innerHTML = `
            <div class="writing-header">
                <h3>${writing.title}</h3>
                <span class="writing-category">${writing.category}</span>
            </div>
            <div class="writing-body">
                <p class="writing-excerpt">${writing.excerpt}</p>
                <div class="writing-footer">
                    <span class="writing-date">${writing.date}</span>
                    <a href="#" class="read-more" onclick="openModal(${writing.id}); return false;">Read More →</a>
                </div>
            </div>
        `;
        writingsGrid.appendChild(card);
    });
}

// Open modal with full writing
function openModal(writingId) {
    const writing = writings.find(w => w.id === writingId);
    if (writing) {
        document.getElementById('modal-title').textContent = writing.title;
        document.getElementById('modal-category').textContent = writing.category;
        document.getElementById('modal-body').textContent = writing.content;
        document.getElementById('modal-date').textContent = `Published on ${writing.date}`;
        document.getElementById('writing-modal').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
}

// Close modal
function closeModal() {
    document.getElementById('writing-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('writing-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Update writing count
function updateWritingCount() {
    document.getElementById('writing-count').textContent = writings.length;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
