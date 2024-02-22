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
          topic={card.theme} 
          title={card.title} 
          key={card.id}
          id={card.id} />
        ))}
      </S.StyledCards>
    </S.MainColumn>
  );
}

export default Column;
