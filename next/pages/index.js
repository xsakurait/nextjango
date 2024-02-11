import React, { useState,useEffect } from 'react'

const Home = () => {
    const [works, setWorks] = useState([])
    

    useEffect(() => {
        // 第２引数が更新されたら実行するが（ 再レンダリング）、[] の場合初期レンダリングのみ
        const fetchData = async () => {
            const response = await fetch('/api/works/')
            const data = await response.json()
            setWorks(data)
        }

        fetchData()
    }, [])
    
    return (
        <div>
            <h1>作品一覧</h1>
            <ul>
                {works.map((work) => (
                    <li>
                        <h2>{work.title}</h2>
                        {/*target=_blank 新しいタブで開く rel="noopener" 新しいタブを別スレッドで開く 、noreferrer参照先に参照元のリンクを渡さないのでリンクにユーザーIDなど書いてもいい*/}
                        <p>URL: <a href={work.url} target='_blank' rel='noopener noreferrer'></a></p>
                        {/* django JSX 変数展開{} HTML {{}} */}
                        {/*JSXではエラー <p>作成日：{work.create_at|date:"M j,Y H:i:s" }</p> */}
                        <p>{new Date(work.create_at.toLocaleString())}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;