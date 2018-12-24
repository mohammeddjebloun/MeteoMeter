
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

namespace MeteoMeter.Backend.Api.UserAAAAA
{
	/// <summary>
	/// Controller responsible for all data interactions with the UserAAAAA
	/// </summary>
	[Route("api/v1/MeteoMeterUserAAAAA")]
	public partial class UserAAAAA : Controller
	{
		private IPictureService _PictureService;
		private IUserProfileService _UserProfileService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.UserAAAAAController"/> class.
		/// </summary>
		public UserAAAAA(IPictureService PictureService,IUserProfileService UserProfileService)
		{
			_PictureService = PictureService;
			_UserProfileService = UserProfileService;
		}

		[HttpGet]
		[Route("/api/user/getFullInfos")]
		[ProducesResponseType(typeof(FullUseraaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> GetFullInfos(string userProfileId)
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new FullUseraaaaaaaaaaaaaa()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpGet]
		[Route("/api/user/list")]
		[ProducesResponseType(typeof(Useraaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> List(Pagingaaaaaaaaaaaaaa paging)
		{
			

			try
			{
				var list = new List<Useraaaaaaaaaaaaaa>();
				return this.Ok(await Task.FromResult(list));
			}
			catch (Exception xcp)
			{
				//log error
				return Ok(Enumerable.Empty <Useraaaaaaaaaaaaaa> ().AsQueryable());
			}
		}

		[HttpPut]
		[Route("/api/user/update")]
		public async Task<IActionResult> Update(Useraaaaaaaaaaaaaa user)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Picture =  user.GetPictureFromViewModel();
				await _PictureService.Save(Picture);
				var UserProfile =  user.GetUserProfileFromViewModel();
				await _UserProfileService.Save(UserProfile);

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpGet]
		[Route("/api/user/signIn")]
		public async Task<IActionResult> SignIn(SignInaaaaaaaaaaaaaa signIn)
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

		[HttpGet]
		[Route("/api/user/checkEmail")]
		public async Task<IActionResult> CheckEmail(string email)
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

		[HttpPut]
		[Route("/api/user/resetPassword")]
		public async Task<IActionResult> ResetPassword(ResetPasswordaaaaaaaaaaaaaa resetPassword)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpGet]
		[Route("/api/user/get")]
		[ProducesResponseType(typeof(Useraaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> Get(string applicationUserId)
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new Useraaaaaaaaaaaaaa()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpGet]
		[Route("/api/user/searchUser")]
		[ProducesResponseType(typeof(Useraaaaaaaaaaaaaa), 200)]
		public async Task<IActionResult> searchUser(string searchTerm)
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new Useraaaaaaaaaaaaaa()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}
	}
}