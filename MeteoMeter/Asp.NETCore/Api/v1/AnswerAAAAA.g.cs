
using System;
using System.Net;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MeteoMeter.Backend.DataModels;
using MeteoMeter.Backend.Models;
using MeteoMeter.Backend.Services;
using MeteoMeter.Backend.ViewModels;

namespace MeteoMeter.Backend.Api.AnswerAAAAA
{
	/// <summary>
	/// Controller responsible for all data interactions with the AnswerAAAAA
	/// </summary>
	[Route("api/v1/MeteoMeterAnswerAAAAA")]
	public partial class AnswerAAAAA : Controller
	{
		private IUserProfileService _UserProfileService;
		private ICardService _CardService;
		private IChoiceService _ChoiceService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.AnswerAAAAAController"/> class.
		/// </summary>
		public AnswerAAAAA(IUserProfileService UserProfileService,ICardService CardService,IChoiceService ChoiceService)
		{
			_UserProfileService = UserProfileService;
			_CardService = CardService;
			_ChoiceService = ChoiceService;
		}

		[HttpPost]
		[Route("/api/answer/create")]
		public async Task<IActionResult> Create(Answeraaaaaaaaaaaaaa answer)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var UserProfile =  answer.GetUserProfileFromViewModel();
				await _UserProfileService.Save(UserProfile );
				var Card =  answer.GetCardFromViewModel();
				await _CardService.Save(Card );
				var Choice =  answer.GetChoiceFromViewModel();
				await _ChoiceService.Save(Choice );

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpPost]
		[Route("/api/answer/discard")]
		public async Task<IActionResult> Discard(Discardaaaaaaaaaaaaaa discard)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var UserProfile =  discard.GetUserProfileFromViewModel();
				await _UserProfileService.Save(UserProfile );
				var Card =  discard.GetCardFromViewModel();
				await _CardService.Save(Card );

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpGet]
		[Route("/api/answer/answeredCard")]
		public async Task<IActionResult> AnsweredCard(int cardId,int userProfileId)
		{
			
			try
			{
				return NotFound();
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}
	}
}