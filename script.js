import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://yfmvqdicqirsjhdxrtjf.supabase.co";
const supabaseKey = "sb_publishable_HOH-C_Z1is6gcRBIoLfvMg_7qGWHeuH";

const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById("createGroup").addEventListener("click", () => {
    alert("Create Group feature coming soon!");
});

document.getElementById("joinGroup").addEventListener("click", () => {
    alert("Join Group feature coming soon!");
});

document.getElementById("sendMessage").addEventListener("click", async () => {
    const input = document.getElementById("messageInput");

    if (input.value.trim() !== "") {

        await supabase
            .from("messages")
            .insert([
                { message: input.value }
            ]);

        input.value = "";
        loadMessages();
    }
});

async function loadMessages() {
    const messages = document.getElementById("messages");
    messages.innerHTML = "";

    const { data } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });

    data.forEach(msg => {
        const p = document.createElement("p");
        p.textContent = msg.message;
        messages.appendChild(p);
    });
}

loadMessages();
