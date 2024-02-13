import Card from "../Cards/Card";
import * as S from "./Column.styled";

function Column({ columnTitle, cardList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <S.ColumnTitleText>{columnTitle}</S.ColumnTitleText>
      </S.ColumnTitle>
      <S.StyledCards>
        {cardList.map((card) => <Card topic={card.theme} title={card.title} key={card.id} />)}
        {/* <Card topic={"Web design"} title={"Название задачи"} />
        <Card topic={"Research"} title={"Название задачи"} />
        <Card topic={"Web design"} title={"Название задачи"} />
        <Card topic={"Copywriting"} title={"Название задачи"} />
        <Card topic={"Web design"} title={"Название задачи"} /> */}
      </S.StyledCards>
    </S.MainColumn>
  );
}

export default Column;
