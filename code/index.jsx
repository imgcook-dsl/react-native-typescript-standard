import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Page_0() {
  const [data] = React.useState([
    {
      title: '小户型卫浴怎样才能装得高大上？',
      coverImage: 'https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png',
      readCount: 200,
      user: { userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png', userName: '时尚家居' },
      url: 'https://www.imgcook.com'
    },
    {
      title: '拥有超多功能的40平米简约小公寓了解一下',
      coverImage: 'https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png',
      readCount: 500,
      user: { userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png', userName: '花花设计工作' },
      url: 'https://www.imgcook.com/docs'
    }
  ]);
  function isReadCountShow(readCount) {
    return readCount > 300;
  }
  return (
    <View style={styles.box}>
      {data.map((item, index) => {
        return (
          <View
            key={index}
            onClick={e => {
              window.open(item.url, '_blank');
            }}
            data-url={item.url}
            key={item.index}
          >
            <View style={styles.bd}>
              <Image
                style={styles.layer}
                source={{ uri: 'https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png' }}
              />
              <Image style={styles.bg} source={{ uri: item.coverImage }} />
              <View style={styles.wrap}>
                <Image
                  style={styles.riverdinwei}
                  source={{ uri: 'https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png' }}
                />
                <Text style={styles.distance}>距离500m</Text>
              </View>
            </View>
            <View style={styles.main}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.ft}>
              <View style={styles.block}>
                <Image
                  style={styles.xianjin}
                  source={{ uri: 'https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png' }}
                />
                <Text style={styles.fashionHome}>{item.user.userName}</Text>
              </View>
              {isReadCountShow(item.readCount) && (
                <View style={styles.group}>
                  <Image
                    style={styles.favorite}
                    source={{ uri: 'https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png' }}
                  />
                  <Text style={styles.num}>{item.readCount}</Text>
                </View>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = {
  box: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', height: 534 },
  bd: { position: 'relative', alignItems: 'flex-start', flexDirection: 'row', opacity: 1, width: 342, height: 342 },
  layer: { position: 'absolute', top: 0, left: 0, width: 342, height: 342 },
  bg: { position: 'absolute', top: 0, left: 0, opacity: 1, width: 342, height: 342 },
  wrap: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 18,
    marginLeft: 18,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.40)',
    paddingRight: 9,
    paddingLeft: 10,
    height: 30
  },
  riverdinwei: { opacity: 1, width: 14, height: 18 },
  distance: { marginLeft: 4, fontSize: 18, color: '#ffffff', lineHeight: 22 },
  main: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: 342,
    height: 114
  },
  title: { marginTop: 22, fontSize: 30, lineHeight: 44 },
  ft: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#ffffff',
    paddingRight: 17,
    paddingLeft: 18,
    width: 342,
    height: 78
  },
  block: { alignItems: 'center', flexDirection: 'row', height: 30 },
  xianjin: { width: 30, height: 30 },
  fashionHome: { marginLeft: 6, fontWeight: '300', fontSize: 24, color: '#666666', lineHeight: 28 },
  group: { alignItems: 'center', flexDirection: 'row', height: 30 },
  favorite: { width: 22, height: 22 },
  num: { marginLeft: 5, fontSize: 22, color: '#999999', lineHeight: 26 }
};
