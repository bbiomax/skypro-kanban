import Card from "../Cards/Card";
import * as S from "./Column.styled";

function Column({ columnTitle, cardList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <S.ColumnTitleText>{columnTitle}</S.ColumnTitleText>
      </S.ColumnTitle>
      <S.StyledCards>
        {cardList.map((card) => (
          <Card
            topic={card.topic}
            title={card.title}
            key={card._id}
            id={card._id}
            date={card.date}
          />
        ))}
      </S.StyledCards>
    </S.MainColumn>
  );
}

export default Column;
