const appkey = "demo13_1545210570249";
export async function getAllStudents() {
  return await fetch(`http://api.duyiedu.com/api/student/findAll?appkey=${appkey}`)
    .then(res => res.json())
    .then(res => res.data)
}
export async function getStudents(page, limit) {
  return await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
    .then(resp => resp.json()).then(resp => resp.data);
}