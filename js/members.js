const spokespersonContainer = document.querySelector("#spokesperson-container");
const viceSpokespersonContainer = document.querySelector(
  "#vice-spokesperson-container"
);
const memberCardTemplate = document.querySelector("#member-card-template");

const MIN_QUOTE_WIDTH = 250;
const GRID_GAP = 16;

const containerWidth = spokespersonContainer.clientWidth;
const columnNumber = Math.floor(
  (containerWidth + GRID_GAP) / (MIN_QUOTE_WIDTH + GRID_GAP)
);

const populateMember = (member, idx) => {
  const { name, class: _class, role, socials } = member;

  const delay = (idx % columnNumber) * 50;

  const memberClone = memberCardTemplate.content.cloneNode(true);

  memberClone
    .querySelector("#member-card")
    .setAttribute("data-aos-delay", delay);

  memberClone.querySelector("#member-name").innerText = name;
  memberClone.querySelector("#member-class").innerText = _class;
  memberClone.querySelector("#member-role").innerText = role;

  memberClone.querySelector("#member-email a").innerText = socials.email;
  memberClone
    .querySelector("#member-email a")
    .setAttribute("href", `mailto:${socials.email}`);

  if (socials.instagram) {
    memberClone.querySelector(
      "#member-instagram a"
    ).innerText = `@${socials.instagram}`;
    memberClone
      .querySelector("#member-instagram a")
      .setAttribute(
        "href",
        `https://www.instagram.com/${socials.instagram}/?hl=en`
      );
  } else {
    memberClone.querySelector("#member-instagram").style.display = "none";
  }

  return memberClone;
};

fetch("/data/members.json")
  .then((res) => res.json())
  .then((members) => {
    const { representatives, deputies } = members;

    representatives.forEach((member, idx) => {
      const element = populateMember(member, idx);

      spokespersonContainer.appendChild(element);
    });

    deputies.forEach((member, idx) => {
      const element = populateMember(member, idx);

      viceSpokespersonContainer.appendChild(element);
    });
  });
