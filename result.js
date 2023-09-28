function createResult(resultData) {
  const Result = {
    id: resultData.id,
    location: resultData.competitionLocation,
    compName: resultData.competitionName,
    placement: resultData.competitionPlacement,
    date: resultData.date,
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
    isBackStroke() {
      return this.discipline === "backstroke";
    },
    isButterfly() {
      return this.discipline === "butterfly";
    },
    isCrawl() {
      return this.discipline === "crawl";
    },
    isBreastStroke() {
      return this.discipline === "breaststroke";
    },
    isFreeStyle() {
      return this.discipline === "freestyle";
    },
  };

  return Result;
}

// function formatDate(dateString) {
//   const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };

//   const date = new Date(dateString);
//   return date.toLocaleDateString("da-DK", options);
// }

export { createResult };
