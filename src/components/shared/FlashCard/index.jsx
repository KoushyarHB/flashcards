export function FlashCard({ questionObj, onClick, isSelected }) {
  //   console.log(questionObj, onClick, isSelected);
  return (
    <div className={isSelected ? "selected" : ""} onClick={onClick}>
      <p>{isSelected ? questionObj.answer : questionObj.question}</p>
    </div>
  );
}
