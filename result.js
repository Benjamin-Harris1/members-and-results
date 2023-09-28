function createResult(resultData, members) {
  const Result = {
    id: resultData.id,
    location: resultData.competitionLocation,
    compName: resultData.competitionName,
    placement: resultData.competitionPlacement,
    date: new Date(resultData.date),
    discipline: resultData.discipline,
    memberId: resultData.memberId,
    type: resultData.resultType,
    time: resultData.time,
    isTraining() {
      return this.type === "training";
    },
    isCompetition() {
      return this.type === "competition";
    },
    setTimeAsString() {},
    getTimeAsString() {},
  };

  return Result;
}

// function formatDate(dateString) {
//   const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };

//   const date = new Date(dateString);
//   return date.toLocaleDateString("da-DK", options);
// }

export { createResult };
