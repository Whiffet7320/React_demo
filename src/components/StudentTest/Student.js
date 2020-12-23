const appkey = "demo13_1545210570249";
export default async function getAllStudents() {
  return await fetch(`http://api.duyiedu.com/api/student/findAll?appkey=${appkey}`)
  .then(res=>res.json())
  .then(res=>res.data)
}
