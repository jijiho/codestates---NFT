export default function NewsComp({ section }) {
  return (
    <div className="w-full  border-t border-black">
      <ul>
        <a href={section[0].link} target="_blank">
          <li>{section[0].title}</li>
        </a>
        <a href={section[1].link} target="_blank">
          <li>{section[1].title}</li>
        </a>
        <a href={section[2].link} target="_blank">
          <li>{section[2].title}</li>
        </a>
        <a href={section[3].link} target="_blank">
          <li>{section[3].title}</li>
        </a>
      </ul>
    </div>
  );
}
