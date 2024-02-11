// プレビュー画面＝詳細画面index.jsのURLクリックでここに飛ばされる
// ファイル名動的に変える →Nextjs

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const WorkDetail = () => {
    const router = useRouter()
    
  // 現在のページのパス
//   const currentPath = router.pathname;

    //   // クエリパラメータ
    // router(URL)の{ query }をquery変数に入れるという意味
    //   const { query } = router;
     // 別のページに遷移
    //  router.push('/example');

    // jsonのidプロパティをid変数に入れる
    const { id } = router.query
    const [works, setWork] = useState({})
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/works/{id}')
            const data = await response.json()
            setWork(data)
        }

        if (id) {
            fetchData()
        }

        
    }, [id])

    // APIからとったjson内の特定のurlのidのworkだけを取得
    // workをuseEffectで書いたらJSXで利用できない
    const work = works.find((w) => w.id == Number(id));
    // まだ取得中
    if (!work) {
            return <p>Loading</p>
    }

    return (
        
        <div>
            <h1>{work.title }</h1>
            <h2>{work.description}</h2>
            <p>URL: <a href="{work.url}" target="_blank" rel="noopener noreferrer"></a></p>
            <p>{new Date(work.create_at.toLocaleString())}</p>
        </div>
    )
}
// エクスポート先で自由な名前でインポートし関数として扱える
export default WorkDetail;
// インポート先で{}で宣言し名前はそのまま
// export 変数=()=>{} 
// 複数exportしたいのある時は最後に書いたほうが楽