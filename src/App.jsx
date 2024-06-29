import './App.css'
import { UIProvider } from './context/ui'
import { HomePage } from './pages/headingIconsPages/HomePage'
import { ShortsPage } from './pages/headingIconsPages/ShortsPage'
import { SubscriptionPage } from './pages/headingIconsPages/SubscriptionPage'

import { YourChannel } from './pages/youIconsPages/YourChannel'
import { History } from './pages/youIconsPages/History'
import { PlayLists } from './pages/youIconsPages/PlayLists'
import { YourVideos } from './pages/youIconsPages/YourVideos'
import { WatchLater } from './pages/youIconsPages/WatchLater'
import { LikedVideos } from './pages/youIconsPages/LikedVideos'



import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from "react-router-dom";
import { Layout } from './Layout'
import { NotFoundPage } from './pages/NotFoundPage'
import { FireshipPage } from './pages/subscriptionPages/FireshipPage'
import { TraversyMediaPage } from './pages/subscriptionPages/TraversyMediaPage'
import { KevinPowellPage } from './pages/subscriptionPages/KevinPowellPage'
import { WebDevSimplifiedPage } from './pages/subscriptionPages/WebDevSimplifiedPage'
import { CalebCurryPage } from './pages/subscriptionPages/CalebCurryPage'
import { SonnySanghaPage } from './pages/subscriptionPages/SonnySanghaPage'

import { TrendingPage } from './pages/explorePages/TrendingPage'
import { MusicPage } from './pages/explorePages/MusicPage'
import { MoviesTvPage } from './pages/explorePages/MoviesTvPage'
import { LivePage } from './pages/explorePages/LivePage'
import { GamingPage } from './pages/explorePages/GamingPage'
import { NewsPage } from './pages/explorePages/NewsPage'
import { LearningPage } from './pages/explorePages/LearningPage'
import { PodcastsPage } from './pages/explorePages/PodcastsPage'
import { SportsPage } from './pages/explorePages/SportsPage'
import { BbcPage } from './pages/subscriptionPages/BbcPage'
import { DevelopedbyedPage } from './pages/subscriptionPages/DevelopedbyedPage'
import { ReutersPage } from './pages/subscriptionPages/ReutersPage'
import { TedTalkPage } from './pages/subscriptionPages/TedTalkPage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="shorts" element={<ShortsPage />} />
        <Route path="subscription" element={<SubscriptionPage />} />

        <Route path="your-channel" element={<YourChannel />} />
        <Route path="history" element={<History />} />
        <Route path="play-lists" element={<PlayLists />} />
        <Route path="your-videos" element={<YourVideos />} />
        <Route path="watch-later" element={<WatchLater />} />
        <Route path="liked-videos" element={<LikedVideos />} />


        <Route path="fireship" element={<FireshipPage />} />
        <Route path="traversy-media" element={<TraversyMediaPage />} />
        <Route path="kevin-powell" element={<KevinPowellPage />} />
        <Route path="web-dev-simplified" element={<WebDevSimplifiedPage />} />
        <Route path="caleb-curry" element={<CalebCurryPage />} />
        <Route path="sonny-sangha" element={<SonnySanghaPage />} />
        <Route path="developedbyed" element={<DevelopedbyedPage />} />
        <Route path="ted-talk" element={<TedTalkPage />} />
        <Route path="bbc" element={<BbcPage />} />
        <Route path="reuters" element={<ReutersPage />} />


        <Route path="trending" element={<TrendingPage />} />
        <Route path="music" element={<MusicPage />} />
        <Route path="movies-Tv" element={<MoviesTvPage />} />
        <Route path="live" element={<LivePage />} />
        <Route path="gaming" element={<GamingPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="sports" element={<SportsPage />} />
        <Route path="learning" element={<LearningPage />} />
        <Route path="podcasts" element={<PodcastsPage />} />



        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <>
      <UIProvider>
        <RouterProvider router={router} />
      </UIProvider>
    </>
  )
}

export default App
