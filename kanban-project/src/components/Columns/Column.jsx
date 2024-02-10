import Card from "../Cards/Card";

function Column({ columnTitle, cardList }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{columnTitle}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => <Card topic={card.theme} title={card.title} key={card.id} />)}
        {/* <Card topic={"Web design"} title={"Название задачи"} />
        <Card topic={"Research"} title={"Название задачи"} />
        <Card topic={"Web design"} title={"Название задачи"} />
        <Card topic={"Copywriting"} title={"Название задачи"} />
        <Card topic={"Web design"} title={"Название задачи"} /> */}
      </div>
    </div>
  );
}

export default Column;
