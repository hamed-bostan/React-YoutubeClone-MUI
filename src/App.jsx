import './App.css'
import { UIProvider } from './context/ui'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from "react-router-dom";
import { Layout } from './Layout'

import { HomePage, BbcPage, CalebCurryPage, DevelopedbyedPage, FireshipPage, GamingPage, History, KevinPowellPage, LearningPage, LikedVideos, LivePage, MoviesTvPage, MusicPage, NewsPage, PlayLists, PodcastsPage, ReutersPage, ShortsPage, SonnySanghaPage, SportsPage, SubscriptionPage, TedTalkPage, TraversyMediaPage, TrendingPage, WatchLater, WebDevSimplifiedPage, YourChannel, YourVideos, NotFoundPage } from './components/pathComponent'


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
