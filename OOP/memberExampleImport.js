let Member  = require( './memberExampleExport.js')

let member_1 = new Member(23,"Junior","Florence Knightengale","knit")
let member_2 = new Member(18,"Sweetbeard","Garden City Clinic","draw")
let member_3 = new Member(18,"Mudi","Baragwana hospital","read")

let people = [member_1, member_2, member_3]

for (var i = 0; i < 2; i++)
    for(j= 0; j < people.length; j++)
        people[j].saySomething();

for (var x = 0; x < 2; x++)
    for(y= 0; y < people.length; y++)
        people[y].passTime();



member_1.introduceSelf()
member_2.introduceSelf()
member_3.introduceSelf()

