import Proptypes from 'prop-types'
export default {
  children:Proptypes.node,
  groupDatas:Proptypes.arrayOf(Proptypes.shape({
    value:Proptypes.string.isRequired,
    text:Proptypes.string.isRequired,
  })),
  chooseData:Proptypes.arrayOf(Proptypes.string),
  oneDatas:Proptypes.shape({
    value:Proptypes.string.isRequired,
    text:Proptypes.string.isRequired,
  })
}