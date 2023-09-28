function constructMember(memberdata) {
  const MemberObject = {
    firstName: memberdata.firstName,
    lastName: memberdata.lastName,
    disciplines: memberdata.disciplines,
    id: memberdata.id,
    active: memberdata.isActiveMember,
    competitive: memberdata.isCompetitive,
    birthday: new Date(memberdata.dateOfBirth).toLocaleDateString("da-DK", { year: "numeric", month: "2-digit", day: "2-digit" }),
    email: memberdata.email,
    gender: memberdata.gender,
    image: memberdata.image,
    hasPayed: memberdata.hasPayed,
    getAge() {
      const currentYear = new Date().getFullYear();
      const birthYear = new Date(memberdata.dateOfBirth).getFullYear();
      const age = currentYear - birthYear;
      return age;
    },
    isJuniorSenior() {
      if (this.getAge() < 18 === true) {
        return "Junior";
      } else {
        return "Senior";
      }
    },
    getFullName() {
      return this.firstName + " " + this.lastName;
    },
    isActive() {
      if (this.active) {
        return "Ja";
      } else return "Nej";
    },
  };

  return MemberObject;
}

export { constructMember };
