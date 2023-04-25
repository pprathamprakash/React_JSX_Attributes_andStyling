import React from "react";
import ReactDOM from "react-dom/client";
import "../public/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const image =
  "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg";

root.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <ul>
        <li>Prasadam</li>
        <li>Phalam</li>
        <li>Patram</li>
      </ul>
    </div>
    <div>
      <img src="https://c8.alamy.com/comp/2CA9G33/suji-ka-halwa-is-indian-dish-served-as-dessert-or-as-offering-to-gods-its-tastes-sweet-and-delicious-in-marathi-it-called-as-sheera-2CA9G33.jpg" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg" />
      <img src="https://media.istockphoto.com/id/1175867030/photo/close-up-of-holy-basil-or-tulsi-leaves-ocimum-sanctum-isolate-on-white-background.jpg?s=612x612&w=0&k=20&c=8AB9GTIxcw6I_MiajI-MRBsqh2hRzDPuDWOOeV5BmXg=" />
    </div>
    <img src={image} />
  </div>
);
