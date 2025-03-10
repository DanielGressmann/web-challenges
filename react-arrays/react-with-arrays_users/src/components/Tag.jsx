import "./Tag.css";

export default function Tag({ tag }) {
  return (
    <span className={`tag ${tag === "admin" ? "tag--highlight" : ""}`}>
      {tag}
    </span>
  );
}
