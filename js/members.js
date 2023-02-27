const membersContainer = document.querySelector("#members-container");
const memberCardTemplate = document.querySelector("#member-card-template");

const MIN_MEMBER_WIDTH = 250;
const GRID_GAP = 16;

const containerWidth = membersContainer.clientWidth;
const columnNumber = Math.floor(
  (containerWidth + GRID_GAP) / (MIN_MEMBER_WIDTH + GRID_GAP)
);

let translatedObject;

const populateMember = (member, idx) => {
  const { name, class: _class, role, socials } = member;

  const transitionDelay = (idx % columnNumber) * 50;

  const memberClone = memberCardTemplate.content.cloneNode(true);

  memberClone
    .querySelector("#member-card")
    .setAttribute("data-aos-delay", transitionDelay);

  memberClone.querySelector("#member-name").innerText = name;
  memberClone.querySelector("#member-class").innerText = _class;

  if (role) {
    memberClone.querySelector("#member-role").innerText =
      translatedObject.members.roles[role];
    memberClone
      .querySelector("#member-role")
      .setAttribute("data-locale-id", `members-roles-${role}`);
  }

  memberClone.querySelector('[data-locale-id="contact-link-1"]').innerText =
    translatedObject.contact.link["1"];
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

fetch("/data/translate.json")
  .then((res) => res.json())
  .then((translations) => {
    const locale = localStorage.getItem("tnk-stuco_locale") || "en";
    translatedObject = translations[locale];

    fetch("/data/members.json")
      .then((res) => res.json())
      .then((members) => {
        members.forEach((member, idx) => {
          const memberElement = populateMember(member, idx);
          membersContainer.appendChild(memberElement);
        });
      });
  });
