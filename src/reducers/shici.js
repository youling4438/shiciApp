import { CHANGE_SHICI_RES } from 'constants/ActionTypes'

// const oneShici = '东边日出西边雨，道是无晴却有晴'
const shiciList = [
  '菡萏香销翠叶残，西风愁起绿波间',
  '纵使晴明无雨色，入云深处亦沾衣',
  '寒雪梅中尽，春风柳上归',
  '洞房昨夜停红烛，待晓堂前拜舅姑',
  '自是长安日下影，流落江湖',
  '灞涘望长安，河阳视京县',
  '似初秋入夜，浅凉欺葛'
]
const getShiciByRandrom = () => {
  const index = Math.floor(Math.random() * 7)
  return shiciList[index];
}

const oneShici = getShiciByRandrom()

export default function shici(state = { oneShici }, action) {
  switch (action.type) {
    case CHANGE_SHICI_RES:
      const { shici } = action
      return {
        "oneShici": shici
      }
    default:
      return state
  }
}
