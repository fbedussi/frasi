module Main exposing (..)

import Array exposing (Array)
import Html exposing (Html, button, div, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Http
import Json.Decode exposing (array, decodeValue, string)
import Random exposing (generate)


---- MODEL ----


type alias Sentence =
    String


type alias Model =
    { sentences : Array Sentence
    , selectedSentenceId : Int
    }


type Msg
    = LoadSentences (Result Http.Error (Array Sentence))
    | FindNewSentence
    | DisplayNewSentence Int


init : ( Model, Cmd Msg )
init =
    ( { sentences = Array.fromList []
      , selectedSentenceId = 0
      }
    , requestSentences
    )


requestSentences : Cmd Msg
requestSentences =
    Http.get "https://lefrasidelbedu.firebaseio.com/frasi.json" sentencesDecoder
        |> Http.send LoadSentences


sentencesDecoder : Json.Decode.Decoder (Array String)
sentencesDecoder =
    array string



---- UPDATE ----


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LoadSentences response ->
            case response of
                Ok sentences ->
                    ( { model | sentences = sentences }, Cmd.none )

                Err error ->
                    ( { model | sentences = Array.fromList [ toString error ] }, Cmd.none )

        FindNewSentence ->
            ( model, generate DisplayNewSentence <| Random.int 0 <| Array.length model.sentences - 1 )

        DisplayNewSentence id ->
            ( { model | selectedSentenceId = id }, Cmd.none )



---- VIEW ----


view : Model -> Html Msg
view model =
    div 
        [class "wrapper"]
        [ div
            [ class "sentence"]
            [ text <| Maybe.withDefault "Sto caricando le frasi..." <| Array.get model.selectedSentenceId model.sentences ]
        , button
            [ onClick FindNewSentence ]
            [ text "dammene un'altra" ]
        ]



---- PROGRAM ----


main : Program Never Model Msg
main =
    Html.program
        { view = view
        , init = init
        , update = update
        , subscriptions = always Sub.none
        }
